import React from 'react';

// Data for attractions
const attractions = [
  {
    name: 'Erbil Citadel',
    image: 'src/assets/images/erbil/144108d3717e9fd54327730779413f3c.jpg',
    description:
      "The heart of the city's history, a UNESCO World Heritage Site.",
  },
  {
    name: 'Sami Abdulrahman Park',
    image: 'src/assets/images/erbil/sami.jpg',
    description:
      'One of the largest parks in the Middle East, perfect for relaxation.',
  },
  {
    name: 'Jalil Khayat Mosque',
    image: 'src/assets/images/erbil/jalil khayat.jpg',
    description: 'A stunning piece of Islamic architecture in Erbil.',
  },
  {
    name: 'Erbil Bazaar',
    image: 'src/assets/images/erbil/erbil.jpg',
    description: 'A lively market offering traditional Kurdish goods.',
  },
  {
    name: 'Family Mall & Majidi Mall',
    image: 'src/assets/images/erbil/Family Mall & Majidi Mall.jpg',
    description: 'Modern shopping centers for entertainment and retail.',
  },
];

const MainAttractions = () => {
  return (
    <section className="mt-10 text-center">
      <h2 className="mb-6 text-2xl font-semibold text-green-400">
        Main Attractions
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {attractions.map((attraction, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-white bg-black bg-opacity-30 shadow-lg"
          >
            <img
              src={attraction.image}
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
