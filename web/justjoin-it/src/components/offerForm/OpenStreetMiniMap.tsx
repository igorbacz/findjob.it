import { MapContainer, TileLayer } from "react-leaflet";
import "../../index.css";

export const OpenStreetMiniMap = () => {
  return (
    <MapContainer center={[52.291335, 19.088525]} zoom={7} scrollWheelZoom={false} id="mini__map__container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

// import { useEffect, useState } from "react";
// import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import "leaflet-easybutton/src/easy-button.js";
// import "leaflet-easybutton/src/easy-button.css";
// import "font-awesome/css/font-awesome.min.css";

// const { BaseLayer } = LayersControl;

// export default function OpenStreetMiniMap() {
//   const [map, setMap] = useState(null);
//   const [position, setPosition] = useState(null);

//   useEffect(() => {
//     if (!map) return;
//     L.easyButton("fa-map-marker", () => {
//       map.locate().on("locationfound", function (e: any) {
//         setPosition(e.latlng);
//         map.flyTo(e.latlng, map.getZoom());
//       });
//     }).addTo(map);
//   }, [map]);

//   return (
//     <MapContainer center={[51.505, -0.09]} zoom={20} style={{ height: "100vh" }} whenCreated={setMap}>
//       <LayersControl>
//         <BaseLayer checked name="OpenStreetMap">
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png "
//           />
//         </BaseLayer>
//       </LayersControl>
//     </MapContainer>
//   );
// }
