import React, { useState, useEffect } from 'react';
import MapComponent from '../MapComponent';
import 'leaflet/dist/leaflet.css';

const API_BASE = 'http://localhost:5000';

const RestaurantList = ({ cityId, selectedType }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const url = selectedType
        ? `${API_BASE}/api/Restaurants/1/${encodeURIComponent(selectedType)}`
        : `${API_BASE}/api/Restaurants?cityId=1`;

      console.log('Fetching from:', url);
      try {
        const res = await fetch(url);
        console.log('HTTP status:', res.status);
        if (!res.ok) {
          setRestaurants([]);
          return;
        }
        const data = await res.json();
        console.log('Received data:', data);
        setRestaurants(data);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchRestaurants();
  }, [cityId, selectedType]);

  return (
    <div>
      <MapComponent
        restaurants={restaurants}
        selectedRestaurant={selectedRestaurant}
      />
      {<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {restaurants.map((restaurant) => (
    <div
      key={restaurant.id}
      className="cursor-pointer rounded-lg border p-4 shadow-md"
      onClick={() => setSelectedRestaurant(restaurant)}
    >
      <img
        src={`${API_BASE}${restaurant.imagePath}`}
        alt={restaurant.name}
        className="h-40 w-full rounded-md object-cover"
      />
      <h2 className="mt-2 text-xl font-bold">{restaurant.name}</h2>
      <p className="text-gray-600">{restaurant.type}</p>
      <p>⭐ {restaurant.starRate}</p>
      <p>📍 {restaurant.location}</p>
    </div>
  ))}
</div>
}
    </div>
  );
};

export default RestaurantList;
