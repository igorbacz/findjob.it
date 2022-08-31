import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { data, stackIcons } from "../../data";
import { useNavigate } from "react-router-dom";

export const OpenStreetMap = () => {
  let navigate = useNavigate();

  const iconUrlFind = (city: any) => {
    const highestLevelStack = city.techStack.find((stack: any) => stack.value === 5);
    const iconOject = stackIcons.find((stack) => stack.stack === highestLevelStack.stackName);
    const iconUrl = iconOject.url;
    const LeafIcon = new L.Icon({
      iconSize: [25, 25],
      iconUrl: iconUrl,
    });
    return LeafIcon;
  };

  return (
    <MapContainer center={[52.291335, 19.088525]} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((city) => (
        <Marker
          position={[city.geolocation.latitude, city.geolocation.longitude]}
          key={city._id}
          eventHandlers={{
            click: (e) => {
              return navigate(`/offer/${city._id}`);
            },
          }}
          icon={iconUrlFind(city)}
        ></Marker>
      ))}
    </MapContainer>
  );
};
