import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import {
    GoogleMap,
    Marker,
    useLoadScript,
    Autocomplete,
} from '@react-google-maps/api';

import styles from './UserLocation.module.scss';

interface Coordinates {
    lat: number;
    lng: number;
}
const Defaultcenter = { lat: 31.5204, lng: 74.3587 };
export const UserLocation = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAWuzs6avBryDYxXo7blEkHt56ikcQ11jU',
        libraries: ['places'],
    });

    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [userLocation, setUserLocation] = useState('');
    const [coordinates, setCoordinates] = useState<Coordinates | undefined>(undefined);

    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newLocation = event.target.value;
        setUserLocation(newLocation);
    };

    const handleLocationSubmit = async () => {
        try {
            const response = await axios.get<{ results: any[] }>(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                    userLocation
                )}&key=AIzaSyAWuzs6avBryDYxXo7blEkHt56ikcQ11jU`
            );
            const { results } = response.data;
            if (results.length > 0) {
                const { lat, lng } = await results[0].geometry.location;
                setCoordinates({ lat, lng });
            } else {
                console.log('Location not found');
            }
        } catch (error) {
            console.error('Error retrieving location:', error);
        }
    };

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    const mapCenter = coordinates||Defaultcenter;

    return (
        <div className={styles.main}>
            <div className={styles.location}>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4"
                    onClick={handleLocationSubmit}
                >
                    Save
                </button>
                <Autocomplete>
                    <input
                        type="text"
                        placeholder="Enter Location"
                        value={userLocation}
                        onChange={handleLocationChange}
                    />
                </Autocomplete>
            </div>
            <GoogleMap
                mapContainerStyle={{
                    width: '100%',
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
                {coordinates && <Marker position={mapCenter} />}
            </GoogleMap>
        </div>
    );
};
