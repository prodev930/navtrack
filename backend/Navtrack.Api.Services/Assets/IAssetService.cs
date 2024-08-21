using System.Threading.Tasks;
using Navtrack.Api.Model.Assets;
using Navtrack.Api.Model.Common;

namespace Navtrack.Api.Services.Assets;

public interface IAssetService
{
    Task<AssetModel> GetById(string assetId);
    Task<ListModel<AssetModel>> GetAssets();
    Task Update(string assetId, UpdateAssetModel model);
    Task Delete(string assetId);
    Task<AssetModel> Create(CreateAssetModel model);
    Task<ListModel<AssetUserModel>> GetAssetUsers(string assetId);
    Task AddUserToAsset(string assetId, CreateAssetUserModel model);
    Task RemoveUserFromAsset(string assetId, string userId);
}