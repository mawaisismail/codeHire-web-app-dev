import { useJsApiLoader } from "@react-google-maps/api";
import { myoption } from "./MyComponent";
import { Map } from "./Map";

export const GoogleApi = () => {
  const { isLoaded } = useJsApiLoader({
    id: myoption.googleMapApiKey,
    googleMapsApiKey: myoption.googleMapApiKey,
  });
  return (
    <div>
      <Map isLoaded={isLoaded} />
    </div>
  );
};
