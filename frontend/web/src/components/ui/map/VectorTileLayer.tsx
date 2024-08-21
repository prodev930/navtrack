import { useEffect, useState } from "react";
import { useMap } from "./useMap";
import L from "leaflet";
import "@maplibre/maplibre-gl-leaflet";

type VectorTileLayerProps = {
  styleUrl: string;
};

export function VectorTileLayer(props: VectorTileLayerProps) {
  const map = useMap();
  const [layer, setLayer] = useState<L.MaplibreGL>();

  useEffect(() => {
    if (!layer) {
      //@ts-ignore TODO
      const l = L.maplibreGL({ style: props.styleUrl }).addTo(map.leafletMap);

      setLayer(l);
    }
  }, [layer, map, props.styleUrl]);

  return null;
}
