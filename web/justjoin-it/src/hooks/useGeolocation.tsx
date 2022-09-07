import React, { useState } from "react";
import { GeoProp } from "../types/types";

export const useGeolocation = () => {
  const [location, setLocation] = useState<GeoProp>({ latitude: "", longitude: "" });
  return <div>useGeolocation</div>;
};
