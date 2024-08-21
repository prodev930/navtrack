import { useCurrentAsset } from "@navtrack/shared/hooks/assets/useCurrentAsset";
import { assetConfigurationAtom } from "@navtrack/shared/state/assets";
import { useEffect } from "react";
import { useMapEvents } from "react-leaflet";
import { useRecoilState } from "recoil";
import { useMap } from "../../ui/map/useMap";

export function useLiveTracking() {
  const currentAsset = useCurrentAsset();
  const [configuration, setConfiguration] = useRecoilState(
    assetConfigurationAtom(currentAsset.data?.id)
  );
  const map = useMap();

  useEffect(() => {
    if (configuration.liveTracking.follow && currentAsset.data?.position) {
      map.setCenter(
        [
          currentAsset.data.position.coordinates.latitude,
          currentAsset.data.position.coordinates.longitude
        ],
        configuration.liveTracking.zoom
      );
    }
  }, [
    configuration.liveTracking.follow,
    configuration.liveTracking.zoom,
    currentAsset.data?.position,
    map
  ]);

  const mapEvents = useMapEvents({
    zoomend: () => {
      setConfiguration((x) => ({
        ...x,
        liveTracking: { ...x.liveTracking, zoom: mapEvents.getZoom() }
      }));
    }
  });

  return { location: currentAsset.data?.position };
}
