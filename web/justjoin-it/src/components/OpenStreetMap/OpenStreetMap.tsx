import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { data, stackIcons } from "../../data";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BigOfferDetails } from "../../types/types";
import { allOffersSelector } from "../../service/offers/selectors";

const MapComponent = () => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const navigate = useNavigate();

  const iconUrlFind = (city: BigOfferDetails) => {
    const iconObject = stackIcons?.find((stack) => stack.stack === city.mainStack);
    const iconUrl = iconObject.url;
    const LeafIcon = new L.Icon({
      iconSize: [25, 25],
      iconUrl: iconUrl,
    });
    return LeafIcon;
  };
  const map = useMap();

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offers.map((city) => (
        <Marker
          position={[Number(city.geolocation.latitude), Number(city.geolocation.longitude)]}
          key={city._id}
          eventHandlers={{
            click: (e) => {
              map.flyTo(e.latlng, 7);
              return navigate(`/offer/${city._id}`);
            },
          }}
          icon={iconUrlFind(city)}
        ></Marker>
      ))}
    </>
  );
};;;;

export const OpenStreetMap = () => (
  <MapContainer center={[52.291335, 19.088525]} zoom={6} scrollWheelZoom={false}>
    <MapComponent />
  </MapContainer>
);

