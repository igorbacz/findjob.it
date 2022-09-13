import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import { stackIcons } from "../../data";
import "../../index.css";
import { useGeolocation } from "../../hooks/useGeolocation";

const MiniMapComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStackParam = searchParams.get("techStack");
  const location = useGeolocation();
  console.log(location);

  const iconUrlFind = () => {
    if (!currentStackParam) {
      return;
    } else {
      const iconObject = stackIcons.find((stack) => stack.stack === currentStackParam);
      const iconUrl = iconObject.url;
      const LeafIcon = new L.Icon({
        iconSize: [25, 25],
        iconUrl: iconUrl,
      });
      return LeafIcon;
    }
  };

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {currentStackParam ? (
        <Marker
          position={!location ? [52.291335, 19.088525] : [Number(location.coordinates.latitude), Number(location.coordinates.longitude)]}
          icon={iconUrlFind()}
        ></Marker>
      ) : null}
    </>
  );
};

export const OpenStreetMiniMap = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStackParam = searchParams.get("techStack");
  const location = useGeolocation();
  return (
    <MapContainer
      center={!currentStackParam ? [52.291335, 19.088525] : [Number(location.coordinates.latitude), Number(location.coordinates.longitude)]}
      zoom={5}
      scrollWheelZoom={false}
      id="mini__map__container"
    >
      <MiniMapComponent />
    </MapContainer>
  );
};
