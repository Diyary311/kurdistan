//dont need this file now



import React from 'react';

function SubcityComponent() {
  const subcity = [
    {
      name: 'Ainkawa',
      description:
        'A predominantly Christian district with many subcity, cafes, restaurants, and expat communities',
      image: 'src/pages/erbil_content/images/Hotels/ankawa.jpg',
    },
    {
      name: 'Kasnazan',
      description:
        'A developing area to the east of Erbil; more affordable housing options',
      image: 'src/pages/erbil_content/images/Hotels/kasnaza.jpg',
    },
    {
      name: 'Shawes',
      description:
        'Shawes is a town in Erbil Governorate, Iraq, located approximately 7 km southeast of Kasnazan and 8 km west of Ankawa',
      image:
        'src/pages/erbil_content/images/Hotels/Screenshot 2025-04-08 025822.png',
    },
    {
      name: 'Dara Tu',
      description: '',
      image: 'src/pages/erbil_content/images/Hotels/Daratu.jpg',
    },
  ];

  return (
    <div className="mx-auto max-w-2xl -translate-y-4 cursor-pointer p-4 duration-500 ease-in-out hover:shadow-lg hover:transition-all">
      {/* Subcity Cards */}
      <div className="space-y-4">
        {subcity.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Image Section */}
            <div className="w-32 shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1">
              {/* Subcity Name */}
              <div className="mb-2 flex items-start justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
              </div>

              {/* Description */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubcityComponent;
