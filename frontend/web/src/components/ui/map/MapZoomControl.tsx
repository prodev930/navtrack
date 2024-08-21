import { Icon } from "../icon/Icon";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useMap } from "./useMap";

export function MapZoomControl() {
  const map = useMap();

  return (
    <div className="absolute left-2 top-2 z-20 overflow-hidden rounded-lg shadow-md">
      <button
        className="flex h-8 w-8 cursor-pointer items-center justify-center bg-white hover:bg-gray-100"
        onClick={(e) => {
          e.nativeEvent.stopImmediatePropagation();
          e.preventDefault();
          map.leafletMap.zoomIn();
        }}>
        <Icon icon={faPlus} />
      </button>
      <div className="h-px w-full bg-gray-200" />
      <button
        className="flex h-8 w-8 cursor-pointer items-center justify-center bg-white hover:bg-gray-100"
        onClick={(e) => {
          e.nativeEvent.stopImmediatePropagation();
          e.preventDefault();
          map.leafletMap.zoomOut();
        }}>
        <Icon icon={faMinus} />
      </button>
    </div>
  );
}
