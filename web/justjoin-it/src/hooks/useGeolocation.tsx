import { useEffect, useState } from "react";

type LocationType = {
  loaded: boolean;
  coordinates?: {
    latitude: string;
    longitude: string;
  };
};

export const useGeolocation = () => {
  const [location, setLocation] = useState<LocationType>({ loaded: false, coordinates: { latitude: "", longitude: "" } });

  const onSuccess = (location: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
  };

  const onError = () => {
    setLocation({
      loaded: true,
    });
  };
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError();
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, [location]);
  return location;
};
