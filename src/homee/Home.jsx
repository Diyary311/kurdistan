import Navbar from './Navbar';
import Attraction from './Attraction';
import History from './history';
import './index.css';

import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Navbar />
      <section className="home" id="home">
        <div className="home_text mt-10">
          <h1
            className="text-5xl font-bold text-white"
            data-aos="fade-right"
            data-aos-fadeduration="1600"
          >
            InKurdistan
          </h1>
          <p
            className="decription"
            data-aos="fade-up"
            data-aos-fadeduration="1800"
          >
            Kurdistan: A Land of Beauty and Heritag <br />
            Kurdistan blends stunning landscapes, ancient history,
            <br />
            and vibrant culture, offering unforgettable experiences and warm
            hospitality.
          </p>
        </div>

        <div className="img">
          <img
            src="src/assets/images/kurdistan_map.png"
            alt="logo"
            data-aos="zoom-in"
            data-aos-fadeduration="2000"
          />
        </div>
      </section>
      <section className="city mt-11" id="city">
        <div className="cards" data-aos="fade-up" data-aos-duration="2000">
          <div className="card">
            <img
              src="/src/assets/images/erbil.jpg"
              alt="erbil"
              className="card_img1"
              onClick={() => navigate('/erbil')}
            />
          </div>
          <div className="card">
            <img
              src="src/assets/images/suli.jpg"
              alt="suli"
              className="card_img2"
            />
          </div>
          <div className="card">
            <img
              src="src/assets/images/duhok.jpg"
              alt="duhok"
              className="card_img3"
            />
          </div>
          <div className="card">
            <img
              src="src/assets/images/halabja.jpg"
              alt="suli"
              className="card_img4"
            />
          </div>
        </div>
      </section>

      <Attraction />
      <hr className="w-5/2" />
      <History />
    </div>
  );
}

export default Home;
