// src/pages/Hotel.jsx
import React from 'react';
import Navbar from '../../homee/Navbar';
import HotelCards from './Hotel_card'; // Import the default export as HotelCards

function Hotel() {
  return (
    <div className="min-h-screen p-5 md:p-10 lg:p-20">
      <Navbar /> {/* Optional: include the Navbar if needed */}
      <h1 className="text-center text-4xl font-bold font-semibold text-green-500">
        Hotels in Suli
      </h1>
      {/* Card section */}
      <section
        className="mt-6 grid grid-cols-1 gap-5"
        data-aos="fade-up"
        data-aos-duration="1600"
        data-aos-easing="ease-in-out"
      >
        <HotelCards cityId={1} />
      </section>
    </div>
  );
}

export default Hotel;
