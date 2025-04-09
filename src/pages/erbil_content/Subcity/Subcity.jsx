import React, { useEffect, useState } from 'react';
import Navbar from '../../../homee/Navbar';

function Subcity() {
  const [subcities, setSubcities] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchSubcities = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/SubCities');
        const data = await response.json();
        setSubcities(data);
      } catch (error) {
        console.error('Error fetching subcities:', error);
      }
    };

    fetchSubcities();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Navbar />
  
      <div className="w-full px-4 py-12">
        <br /><br />
        <h1 className="mb-8 text-center text-5xl font-bold text-green-500">
          Town in Erbil
        </h1>
  
        {/* Grid Container - Original 4-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto justify-center">
          {subcities.map((subcity) => (
            <div
              key={subcity.id}
              className="overflow-hidden rounded-lg border border-white bg-black bg-opacity-30 shadow-lg"
            >
              <img
                src={`http://localhost:5000${subcity.imageUrl}`}
                alt={subcity.cityName}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold">
                  {subcity.cityName}
                </h3>
                <p className="mt-2 text-sm">
                  {subcity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subcity;