import Navbar from '../../homee/Navbar.jsx';
import React, { useState, useEffect } from 'react';
import Buttons from '../erbil_content/buttons.jsx';
import './Suli.css';
function Suli() {
  const imagePath = [
    { src: 'src/assets/images/Suli/5fa3b27f1c8af46c7bf2e36dbee2b2bd.jpg' },
    { src: 'src/assets/images/Suli/39e83f59c39e08e7f96653cc73080bff.jpg' },
    {
      src: 'src/assets/images/Suli/5553c34829dc40f9493d864dfa61d352.jpg',
    },
    {
      src: 'src/assets/images/Suli/7848a36bdb6f3d66f5cbf5ec085eb8f7.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((preindex) => (preindex + 1) % imagePath.length);
  };

  const prevSlide = () => {
    setCurrentIndex((preindex) =>
      preindex === 0 ? imagePath.length - 1 : preindex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <Navbar />
      <div className="title" data-aos="fade-up" data-aos-fadeduration="1600">
        <h1 className="absolute left-1/2 top-0 mt-20 -translate-x-1/2 transform text-center text-5xl font-bold text-green-500">
          Sulaymaniyah
        </h1>

        <section className="images relative mt-32 flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-60 text-white shadow-lg transition-all hover:scale-110"
          >
            ◀
          </button>

          <div className="relative mt-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-700 shadow-lg">
            <img
              src={imagePath[currentIndex].src}
              alt="Sulaymaniyah"
              className="h-[450px] w-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-60 text-white shadow-lg transition-all hover:scale-110"
          >
            ▶
          </button>
        </section>

        <section className="text- mt-32 text-center text-lg">
          <h1
            className="h1 w-fit rounded-lg border border-white bg-black bg-opacity-30 px-4 py-2 font-bold text-green-500"
            data-aos="fade-up"
            data-aos-fadeduration="1800"
          >
            About Sulaymaniyah
          </h1>

          <div className="mx-auto mt-6 max-w-3xl text-left leading-relaxed text-white">
            <p>
              <strong>Sulaymaniyah</strong>, also known as{' '}
              <strong>Slemani</strong>, is a major city in the Kurdistan Region
              of Iraq. With a history spanning over <strong>6,000 years</strong>
              , it is one of the{' '}
              <strong>oldest continuously inhabited cities in the world</strong>
              . Sulaymaniyah blends ancient heritage with modern urban
              development, offering a unique experience to visitors and
              residents alike.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Why Visit Sulaymaniyah?
            </h2>
            <p>
              Sulaymaniyah is a city that offers a perfect mix of{' '}
              <strong>history, culture, and modernity</strong>. Whether you're
              interested in exploring ancient sites, experiencing Kurdish
              hospitality, or enjoying the natural surroundings, Sulaymaniyah is
              a destination worth visiting.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Geographical Location
            </h2>
            <p>
              Sulaymaniyah is located in <strong>northeastern Iraq</strong>,
              approximately <strong>330 km northeast of Baghdad</strong>. The
              city lies in a mountainous region, making it a key cultural and
              educational hub in the region.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Population and Area
            </h2>
            <ul className="list-inside list-disc">
              <li>
                <strong>Population:</strong> Approximately{' '}
                <strong>900,000</strong> people.
              </li>
              <li>
                <strong>Area:</strong> Around <strong>7,000 km²</strong>,
                covering both urban and rural areas.
              </li>
            </ul>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Historic and Cultural Significance
            </h2>
            <p>
              Sulaymaniyah is home to the <strong>Amna Suraka Museum</strong>, a
              historical site that tells the story of the Kurdish struggle. The
              city’s rich history is reflected in its cultural institutions,
              traditional Kurdish architecture, and museums showcasing artifacts
              from various civilizations, including the Sumerians, Assyrians,
              and Ottomans.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Popular Neighborhoods
            </h2>
            <ul className="list-inside list-disc">
              <li>
                <strong>Salim Street</strong> – A vibrant district known for its
                shops, cafés, and local activity.
              </li>
              <li>
                <strong>Sarchinar</strong> – A natural retreat with parks and
                recreation.
              </li>
              <li>
                <strong>Chwar Bakh</strong> – Known for its residential and
                educational facilities.
              </li>
              <li>
                <strong>Bakrajo</strong> – A district popular among students and
                professionals.
              </li>
              <li>
                <strong>Raparin</strong> – A cultural and historical hub of the
                city.
              </li>
            </ul>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Climate
            </h2>
            <p>
              Sulaymaniyah has a <strong>semi-arid climate</strong>,
              characterized by <strong>hot summers and cold winters</strong>.
            </p>
            <ul className="list-inside list-disc">
              <li>
                <strong>Summer temperatures:</strong> Can reach{' '}
                <strong>40°C (104°F)</strong>.
              </li>
              <li>
                <strong>Winter temperatures:</strong> Range between{' '}
                <strong>0°C and 10°C (32°F – 50°F)</strong>, with occasional
                snowfall and rainfall.
              </li>
            </ul>
          </div>
        </section>

        <div className="container ml-9 mt-16 items-center justify-center">
          <Buttons city="suli" />
        </div>
      </div>
    </div>
  );
}

export default Suli;
