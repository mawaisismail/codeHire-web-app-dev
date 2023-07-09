import styles from "./Google.module.scss";
import { useRef, useState } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";

const center = { lat: 31.5204, lng: 74.3587 };
const Jobs: {
  position: { lat: number; lng: number };
  label?: google.maps.MarkerLabel;
}[] = [
  {
    position: { lat: 31.4674, lng: 74.266 },
  },
  {
    position: { lat: 31.4469, lng: 74.2682 },
  },
  {
    position: { lat: 31.4553, lng: 74.2756 },
  },
  {
    position: { lat: 31.4606, lng: 74.2438 },
  },
  {
    position: { lat: 31.4312, lng: 74.2644 },
  },
  {
    position: { lat: 31.5203, lng: 74.4104 },
  },
  {
    position: { lat: 31.5124, lng: 74.2845 },
  },
  {
    position: { lat: 31.4834, lng: 74.3969 },
  },
  {
    position: { lat: 31.5504, lng: 74.4826 },
  },
  {
    position: { lat: 31.5475, lng: 74.5214 },
  },
  {
    position: { lat: 31.5731, lng: 74.1957 },
  },
];

export const GoogleApi = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAWuzs6avBryDYxXo7blEkHt56ikcQ11jU",
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const originRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  async function calculateRoute() {
    if (
      originRef.current?.value === "" ||
      destinationRef.current?.value === ""
    ) {
      return;
    } else {
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: originRef.current?.value ?? "",
        destination: destinationRef.current?.value ?? "",
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0]?.legs[0]?.distance?.text ?? "");
      setDuration(results.routes[0]?.legs[0]?.duration?.text ?? "");
    }
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    if (originRef.current) originRef.current.value = "";
    if (destinationRef.current) destinationRef.current.value = "";
  }

  const handleLatLng = async (marker: {
    position: { lat: number; lng: number };
  }) => {
    await handleLatLngUser();
    const lat = marker.position.lat;
    const lng = marker.position.lng;

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAWuzs6avBryDYxXo7blEkHt56ikcQ11jU`
    )
      .then((response) => response.json())
      .then(async (data) => {
        if (data.status === "OK" && data.results.length > 0) {
          const locationName = data.results[0].formatted_address;
          if (destinationRef.current)
            destinationRef.current.value = locationName;
          await calculateRoute();
        } else {
          console.log("Reverse geocoding failed destination");
        }
      })
      .catch((error) => {
        console.log("Error occurred during reverse geocoding", error);
      });
  };

  async function handleLatLngUser() {
    const lat = center.lat;
    const lng = center.lng;
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAWuzs6avBryDYxXo7blEkHt56ikcQ11jU`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        if (data.status === "OK" && data.results.length > 0) {
          const locationName = data.results[0].formatted_address;
          if (originRef.current) originRef.current.value = locationName;
        } else {
          console.log("Reverse geocoding failed user");
        }
      })
      .catch((error) => {
        console.log("Error occurred during reverse geocoding", error);
      });
  }

  return (
    <div className={styles.main}>

      <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0",
            top: "10%",
          }}
          center={center}
          zoom={12}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            styles: [
              { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
              {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#242f3e" }],
              },
              {
                elementType: "labels.text.fill",
                stylers: [{ color: "#746855" }],
              },
              {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
              },
              {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
              },
              {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
              },
              {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
              },
              {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
              },
              {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
              },
            ],
          }}
          onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        {Jobs.map((marker, index) => (
            <Marker
                key={index}
                position={marker.position}
                onClick={() => handleLatLng(marker)}
                label={marker.label}
            />
        ))}
        {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
      <div className={styles.content}>
        <div className={styles.inputContainer}>
          <div>
            <input type="text" placeholder="User" ref={originRef} />
            <input type="text" placeholder="Job" ref={destinationRef} />
          </div>
          <div>
            <span>Distance: {distance} </span>
            <span>Duration: {duration} </span>
          </div>
        </div>

        <div className={styles.infoContainer}>
          <FaTimes onClick={clearRoute} className={styles.icons} />
          <FaLocationArrow
              className={styles.icons}
              onClick={() => {
                if (map) {
                  map.panTo(center);
                  map.setZoom(15);
                }
              }}
          />
        </div>
      </div>
    </div>
  );
};
