import React, { useState } from 'react';
import {
    GoogleMap,
    Marker,
    useLoadScript,
} from '@react-google-maps/api';

const Defaultcenter = { lat: 31.5204, lng: 74.3587 };
export const UserMap = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAWuzs6avBryDYxXo7blEkHt56ikcQ11jU',
        libraries: ['places'],
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    const mapCenter = Defaultcenter;

    return (
        <div>
            <GoogleMap
                mapContainerStyle={{
                    width: '90%',
                    height: '200px',
                }}
                center={mapCenter}
                zoom={12}
                options={{
                    zoomControl: true,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
                onLoad={(map) => setMap(map)}
            >
                <Marker position={mapCenter} />
            </GoogleMap>
        </div>
    );
};
