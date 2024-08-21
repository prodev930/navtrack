using System.Collections.Generic;
using System.Security.Cryptography;
using System.Threading.Tasks;
using IdentityModel;
using IdentityServer4.Models;
using IdentityServer4.Stores;
using Microsoft.IdentityModel.Tokens;
using Navtrack.Api.Services.IdentityServer.Models;
using Navtrack.Shared.Library.DI;
using Navtrack.Shared.Services.Settings;

namespace Navtrack.Api.Services.IdentityServer;

[Service(typeof(ISigningCredentialStore))]
[Service(typeof(IValidationKeysStore))]
public class SigningCredentialStore(ISettingService service) : ISigningCredentialStore, IValidationKeysStore
{
    public async Task<SigningCredentials> GetSigningCredentialsAsync()
    {
        SigningCredentials credentials = await GetSigningCredentials();

        return credentials;
    }

    public async Task<IEnumerable<SecurityKeyInfo>> GetValidationKeysAsync()
    {
        SigningCredentials credentials = await GetSigningCredentials();

        return new[]
        {
            new SecurityKeyInfo
                { Key = credentials.Key, SigningAlgorithm = credentials.Algorithm }
        };
    }

    private async Task<SigningCredentials> GetSigningCredentials()
    {
        IdentityServerSettings identityServerSettings = await service.Get<IdentityServerSettings>();

        RsaSecurityKey rsaSecurityKey;

        if (identityServerSettings == null)
        {
            rsaSecurityKey = CreateRsaSecurityKey();

            identityServerSettings = new IdentityServerSettings
            {
                SigningCredentials = CreateIdentityServerSigningCredentials(rsaSecurityKey)
            };

            await service.Set(identityServerSettings);
        }

        rsaSecurityKey = new RsaSecurityKey(RsaParametersMapper.Map(identityServerSettings.SigningCredentials.KeyParameters))
        {
            KeyId = identityServerSettings.SigningCredentials.Key
        };

        SigningCredentials credentials = new(rsaSecurityKey, SecurityAlgorithms.RsaSha256);

        return credentials;
    }

    private static RsaSecurityKey CreateRsaSecurityKey()
    {
        RsaSecurityKey rsaSecurityKey = new(RSA.Create(2048))
        {
            KeyId = CryptoRandom.CreateUniqueId(16)
        };

        return rsaSecurityKey;
    }

    private static IdentityServerSigningCredentials CreateIdentityServerSigningCredentials(RsaSecurityKey securityKey)
    {
        IdentityServerSigningCredentials identityServerSigningCredentials = new()
        {
            Key = securityKey.KeyId
        };

        if (securityKey.Rsa != null)
        {
            RSAParameters parameters = securityKey.Rsa.ExportParameters(true);

            identityServerSigningCredentials.KeyParameters = RsaParametersMapper.Map(parameters);
        }
        else
        {
            identityServerSigningCredentials.KeyParameters = RsaParametersMapper.Map(securityKey.Parameters);
        }

        return identityServerSigningCredentials;
    }
}