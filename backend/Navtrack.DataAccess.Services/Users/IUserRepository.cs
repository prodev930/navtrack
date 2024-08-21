using System.Threading.Tasks;
using MongoDB.Bson;
using Navtrack.DataAccess.Model.Users;
using Navtrack.DataAccess.Mongo;

namespace Navtrack.DataAccess.Services.Users;

public interface IUserRepository : IGenericRepository<UserDocument>
{
    Task<UserDocument> GetByEmailOrAppleId(string email, string id);
    Task<UserDocument> GetByEmailOrGoogleId(string email, string id);
    Task<UserDocument> GetByEmailOrMicrosoftId(string email, string id);
    Task DeleteAssetRoles(string assetId);
    Task<UserDocument?> GetByEmail(string email);
    Task<bool> EmailIsUsed(string email);
    Task Update(ObjectId id, UpdateUser updateUser);
    Task AddAssetRole(ObjectId userId, UserAssetRoleElement userAssetRole);
}