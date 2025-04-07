import Navbar from './Navbar';
import Attraction from './Attraction';
import History from './history';
import Footer from './footer';
import './index.css';

import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react'; // Add this at the top  I

function Home() {
  const navigate = useNavigate();

  // Add this useEffect hook    I

  /*
  useEffect(() => {
    fetch('https://localhost:7005/api/test')
      .then(res => res.text())
      .then(data => console.log("BACKEND CONNECTION:", data))
      .catch(err => console.error("CONNECTION ERROR:", err));
  }, []);
*/
  return (
    <div className="home text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center px-4 md:flex-row md:justify-between md:px-12 lg:px-24"
        id="home"
      >
        <div className="home_text mt-10 text-center md:text-left">
          <h1
            className="text-4xl font-bold sm:text-5xl"
            data-aos="fade-right"
            data-aos-fadeduration="1500"
          >
            InKurdistan
          </h1>
          <p
            className="mt-4 text-lg sm:text-xl"
            data-aos="fade-up"
            data-aos-fadeduration="1800"
          >
            Kurdistan: A Land of Beauty and Heritage <br />
            Kurdistan blends stunning landscapes, ancient history, <br />
            and vibrant culture, offering unforgettable experiences and warm
            hospitality.
          </p>
        </div>

        {/* Map Image */}
        <div className="mt-6 w-full max-w-xs md:max-w-md lg:max-w-lg">
          <img
            src="src/assets/images/kurdistan_map.png"
            alt="Kurdistan Map"
            className="h-auto w-full"
            data-aos="zoom-in"
            data-aos-fadeduration="2000"
          />
        </div>
      </section>

      {/* City Cards */}
      <section className="city mt-11 px-4 sm:px-10 lg:px-24" id="city">
        <div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          {/* City Cards */}
          {[
            {
              src: 'src/assets/images/erbil.jpg',
              alt: 'Erbil',
              path: '/erbil',
            },
            { src: 'src/assets/images/suli.jpg', alt: 'Sulaimani', path: '' },
            { src: 'src/assets/images/duhok.jpg', alt: 'Duhok', path: '' },
            { src: 'src/assets/images/halabja.jpg', alt: 'Halabja', path: '' },
          ].map((city, index) => (
            <div
              key={index}
              className="relative cursor-pointer rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:tracking-widest"
            >
              <img
                src={city.src}
                alt={city.alt}
                className="h-48 w-full rounded-lg object-cover"
                onClick={() => city.path && navigate(city.path)}
              />
              <p className="absolute bottom-2 left-2 rounded bg-black bg-opacity-70 px-2 py-1 text-sm text-white">
                {city.alt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Sections */}
      <Attraction />
      <hr className="w-5/2 border-gray-600" />
      <History />
      <hr className="w-5/2 border-gray-600" />
      <Footer />
    </div>
  );
}

export default Home;
