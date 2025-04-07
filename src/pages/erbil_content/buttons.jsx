import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Buttons() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="btn flex items-center justify-center gap-4 rounded-sm">
        <button
          onClick={() => navigate('/resturants')}
          className="cursor-pointer border-white bg-green-500 transition-all duration-700 hover:-translate-y-5 hover:bg-transparent hover:font-semibold hover:tracking-widest hover:text-green-500"
        >
          restaurants
        </button>
        <button
          onClick={() => navigate('/hotels')}
          className="cursor-pointer border-white bg-green-500 transition-all duration-700 hover:-translate-y-5 hover:bg-transparent hover:font-semibold hover:tracking-widest hover:text-green-500"
        >
          Hotels
        </button>

        <button className="cursor-pointer border-white bg-green-500 transition-all duration-700 hover:-translate-y-5 hover:bg-transparent hover:font-semibold hover:tracking-widest hover:text-green-500">
          Subcitys
        </button>

        <button className="cursor-pointer border-white bg-green-500 transition-all duration-700 hover:-translate-y-5 hover:bg-transparent hover:font-semibold hover:tracking-widest hover:text-green-500">
          Attraction Places
        </button>
      </div>
    </div>
  );
}

export default Buttons;
