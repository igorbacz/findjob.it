import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import { data, stackIcons } from "../../data";
import { useNavigate } from "react-router-dom";

// const iconMarkup = renderToStaticMarkup(<FaHtml5 />);
// const markerIcon = L.divIcon({
//   html: <FaHtml5 />,
// });

// const iconMarkup = data.map((icon)=>)

export const OpenStreetMap = () => {
  let navigate = useNavigate();

  // const StackIcon = L.icon({
  //   // iconUrl: "https://justjoin.it/static/media/testing.4e552286.svg",
  //   iconUrl:

  // });

  const iconUrlFind = data.map((icon) => {
    const highestLevelStack = icon.techStack.find((stack) => stack.value === 5);
    const iconOject = stackIcons.find((stack) => stack.stack === highestLevelStack.stackName);
    const iconUrl = iconOject.url;
    console.log(iconUrl);
    return iconUrl;
  });

  const iconStackUrl = iconUrlFind[1];

  const LeafIcon = new L.Icon({
    iconSize: [25, 25],
    iconUrl: iconStackUrl,
  });

  return (
    <MapContainer center={[52.291335, 19.088525]} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((city) => (
        <Marker
          // touchZoom={true}
          position={[city.geolocation.latitude, city.geolocation.longitude]}
          key={city._id}
          eventHandlers={{
            click: (e) => {
              return navigate(`/offer/${city._id}`);
            },
          }}
          icon={LeafIcon}
        ></Marker>
      ))}
    </MapContainer>
  );
};
