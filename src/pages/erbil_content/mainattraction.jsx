import React, { useState, useEffect } from 'react';

const MainAttractions = () => {
  const [attractions, setAttractions] = useState([]);
  const API_BASE = 'http://localhost:5000';

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/Attractions?cityIds=1`);
        if (!response.ok) throw new Error('Failed to fetch attractions');
        const data = await response.json();
        setAttractions(data);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      }
    };

    fetchAttractions();
  }, []);

  return (
    <section className="mt-10 text-center">
      <h2 className="mb-6 text-2xl font-semibold text-green-400">
        Main Attractions
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {attractions.map((attraction) => (
          <div
            key={attraction.id}
            className="overflow-hidden rounded-lg border border-white bg-black bg-opacity-30 shadow-lg"
          >
            <img
              src={`${API_BASE}${attraction.imagePath}`}
              alt={attraction.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 text-white">
              <h3 className="text-lg font-semibold">{attraction.name}</h3>
              <p className="mt-2 text-sm">{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainAttractions;