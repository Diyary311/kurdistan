import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import PropTypes from 'prop-types';

import 'leaflet/dist/leaflet.css';

// Import default and custom marker icons
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import redIconUrl from '../assets/marker-icon-red.png'; // Ensure this file exists in src/assets/

const defaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

const redIcon = L.icon({
  iconUrl: redIconUrl,
  shadowUrl: iconShadow,
});

// If no restaurant is selected, automatically fit map to show all markers.
const FitMapToMarkers = ({ restaurants }) => {
  const map = useMap();

  useEffect(() => {
    if (restaurants.length > 0) {
      const bounds = L.latLngBounds(restaurants.map((r) => [r.lat, r.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [restaurants, map]);

  return null;
};

FitMapToMarkers.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

// When a restaurant is selected (via clicking an image card), move map to it.
const MoveMapToSelected = ({ selectedRestaurant }) => {
  const map = useMap();
  useEffect(() => {
    if (selectedRestaurant) {
      map.setView([selectedRestaurant.lat, selectedRestaurant.lng], 15);
    }
  }, [selectedRestaurant, map]);
  return null;
};

MoveMapToSelected.propTypes = {
  selectedRestaurant: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
};

const MapComponent = ({ restaurants, selectedRestaurant }) => {
  return (
    <MapContainer
      center={[35.56, 45.42]} // fallback center if no restaurants exist
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
          OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectedRestaurant ? (
        <MoveMapToSelected selectedRestaurant={selectedRestaurant} />
      ) : (
        <FitMapToMarkers restaurants={restaurants} />
      )}

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
          <Popup>
            <strong>{restaurant.name}</strong>
            <br />
            {restaurant.cuisine}
            <br />
            {restaurant.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

MapComponent.propTypes = {
  restaurants: PropTypes.array.isRequired,
  selectedRestaurant: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
};

export default MapComponent;
