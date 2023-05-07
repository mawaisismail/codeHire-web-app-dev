import { GoogleMap, Marker } from "@react-google-maps/api";

export const Map = (props: any) => {
  const { isLoaded } = props;

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 31.5204,
    lng: 74.3587,
  };

  const markers = [
    {
      position: { lat: 31.3909, lng: 74.2417 },
      companyName: "<p>University of Lahore</p>",
    },
    {
      position: { lat: 31.479, lng: 74.2662 },
      companyName: "<p>University of Punjab</p>",
    },
    {
      position: { lat: 31.5704, lng: 74.3096 },
      companyName: "<p>PUCIT</p>",
    },
  ];

  return (
    isLoaded && (
      <>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}></Marker>
          ))}
        </GoogleMap>
      </>
    )
  );
};
