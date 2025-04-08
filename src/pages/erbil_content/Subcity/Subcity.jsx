// Subcity.js
import React from 'react';
import Navbar from '../../../homee/Navbar';
import SubcityComponent from './SubcityComponent';

function Subcity() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 ml-[500px] text-center text-5xl font-bold text-green-500">
          Subcity in Erbil
        </h1>
        <div className="ml-[500px] flex items-center justify-center">
          <SubcityComponent />
        </div>
      </div>
    </div>
  );
}

export default Subcity;
