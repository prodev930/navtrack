import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { assetConfigurationAtom, currentAssetIdAtom } from "../../state/assets";
import { useAssetsQuery } from "../queries/useAssetsQuery";
import { useOnChange } from "../util/useOnChange";

type UseCurrentAssetProps = {
  onChange?: (oldId?: string, newId?: string) => void;
};

export const useCurrentAsset = (props?: UseCurrentAssetProps) => {
  const currentAssetId = useRecoilValue(currentAssetIdAtom);
  const assets = useAssetsQuery();
  const assetConfiguration = useRecoilValue(
    assetConfigurationAtom(currentAssetId)
  );

  const currentAsset = useMemo(
    () => assets.data?.items.find((x) => x.id === currentAssetId),

    [assets, currentAssetId]
  );

  useOnChange(currentAssetId, (prev, cur) => props?.onChange?.(prev, cur));

  return {
    isLoading: assets.isLoading,
    data: currentAsset,
    configuration: assetConfiguration
  };
};
