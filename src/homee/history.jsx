import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function History() {
  const navigate = useNavigate();
  return (
    <section className="Culture&History" id="Culture&History">
      <header className="py-4 text-white">
        <h1
          className="text-center text-3xl font-bold"
          data-aos="fade-up"
          data-aos-duration="0.8s"
        >
          Culture&History
        </h1>
        <h1 className="ml-4 mt-20 text-4xl">History of Kurdistan</h1>
        <p className="ml-4 justify-start align-middle text-xl">
          Kurdistan, the historical homeland of the Kurds, is a mountainous
          region spanning parts of modern-day Turkey, Iraq, Iran, and Syria. It
          has a rich and complex history shaped by various empires, struggles
          for autonomy, and the resilience of the Kurdish people. The region has
          been a crossroads of civilizations, influenced by the ancient
          Mesopotamians, Persians, Arabs, and Ottomans
        </p>
        <button
          onClick={() => navigate('/Culture&History')}
          className="ml-4 mt-5 rounded-lg border-none bg-transparent font-mono text-teal-500 transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-xl hover:tracking-widest hover:text-white"
        >
          See More
        </button>
      </header>
    </section>
  );
}

export default History;
