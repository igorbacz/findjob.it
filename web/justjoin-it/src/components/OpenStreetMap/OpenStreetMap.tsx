import { MapContainer, TileLayer } from "react-leaflet";

export const OpenStreetMap = () => {
  return (
    <MapContainer center={[52.291335, 19.088525]} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};
