import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import PropTypes from 'prop-types';

import 'leaflet/dist/leaflet.css';

// Default blue icon from Leaflet package
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Red icon image stored in your local project (download and place it in src/assets/)
import redIconUrl from '../assets/marker-icon-red.png';

const defaultIcon = L.icon({
  iconUrl: iconUrl,
  shadowUrl: iconShadow,
});

const redIcon = L.icon({
  iconUrl: redIconUrl,
  shadowUrl: iconShadow,
});

const MapComponent = ({ restaurants, selectedRestaurant }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (selectedRestaurant && mapRef.current) {
      const map = mapRef.current;
      map.setView([selectedRestaurant.lat, selectedRestaurant.lng], 15);
    }
  }, [selectedRestaurant]);

  return (
    <MapContainer
      center={[36.190889, 44.007663]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      scrollWheelZoom={true}
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.id}
          position={[restaurant.lat, restaurant.lng]}
          icon={
            selectedRestaurant &&
            selectedRestaurant.lat === restaurant.lat &&
            selectedRestaurant.lng === restaurant.lng
              ? redIcon
              : defaultIcon
          }
        >
          <Popup>{restaurant.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

MapComponent.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedRestaurant: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
};

export default MapComponent;
