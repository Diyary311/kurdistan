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
        console.log(data);
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
          Subcities in Erbil
        </h1>
  
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto justify-center">
          {subcities.map((subcity) => (
            <div key={subcity.id} className="subcity-card bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={`http://localhost:5000${subcity.imageUrl}`}
                alt={subcity.cityName}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3
                className="text-lg font-bold mt-4"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  padding: '10px',
                  margin: 0,
                }}
              >
                {subcity.cityName}
              </h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {subcity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
}

export default Subcity;
