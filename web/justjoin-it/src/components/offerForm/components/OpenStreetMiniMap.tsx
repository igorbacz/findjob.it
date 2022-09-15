import L from "leaflet";
import useGeolocation from "react-hook-geolocation";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useSearchParams } from "react-router-dom";
import { stackIcons } from "../../../data";
import "../../../index.css";

const MiniMapComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStackParam = searchParams.get("techStack");
  const geolocation = useGeolocation();
  const longitude = geolocation.longitude;
  const latitude = geolocation.latitude;

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
      {currentStackParam ? <Marker position={!geolocation ? [52.291335, 19.088525] : [latitude, longitude]} icon={iconUrlFind()}></Marker> : null}
    </>
  );
};

export const OpenStreetMiniMap = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStackParam = searchParams.get("techStack");
  // const location = UseGeolocation();
  return (
    <MapContainer center={[52.291335, 19.088525]} zoom={5} scrollWheelZoom={false} id="mini__map__container">
      <MiniMapComponent />
    </MapContainer>
  );
};
