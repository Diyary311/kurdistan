import React, { useState, useEffect } from 'react';
import './erbilsyle.css';
import Navbar from '../homee/Navbar';
import MainAttractions from './erbil_content/mainattraction';

import Buttons from './erbil_content/buttons';

const Erbil = () => {
  const imagePath = [
    { src: 'src/assets/images/erbil/Erbil Citadel.jpg' },
    { src: 'src/assets/images/erbil/Erbil Kurdistan.jpg' },
    {
      src: 'src/assets/images/erbil/Hawlerclocktower - Kurdistan پایتەختی کوردستان.jpg',
    },

    {
      src: 'src/assets/images/erbil/اللهم احفظها 😍.jpg',
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
        <h1 className="absolute left-1/2 top-0 mt-12 -translate-x-1/2 transform text-center text-5xl font-bold text-green-500">
          Erbil
        </h1>

        <section className="images relative mt-32 flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-60 text-white shadow-lg transition-all hover:scale-110"
          >
            ◀
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-700 shadow-lg">
            <img
              src={imagePath[currentIndex].src}
              alt="Erbil"
              className="h-[450px] w-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black bg-opacity-60 text-white shadow-lg transition-all hover:scale-110"
          >
            ▶
          </button>
        </section>

        {/* about section */}

        <section className="text- mt-10 text-center text-lg">
          <h1
            className="h1 w-fit rounded-lg border border-white bg-black bg-opacity-30 px-4 py-2 font-bold text-green-500"
            data-aos="fade-up"
            data-aos-fadeduration="1800"
          >
            About Erbil
          </h1>

          <div className="mx-auto mt-6 max-w-3xl text-left leading-relaxed text-white">
            <p>
              <strong>Erbil</strong>, also known as <strong>Hawler</strong>, is
              the capital and largest city of the Kurdistan Region of Iraq. With
              a history spanning over <strong>6,000 years</strong>, it is one of
              the{' '}
              <strong>oldest continuously inhabited cities in the world</strong>
              . Erbil blends ancient heritage with modern urban development,
              offering a unique experience to visitors and residents alike.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Why Visit Erbil?
            </h2>
            <p>
              Erbil is a city that offers a perfect mix of{' '}
              <strong>history, culture, and modernity</strong>. Whether you're
              interested in exploring ancient sites, experiencing Kurdish
              hospitality, or witnessing the city's rapid development, Erbil is
              a destination worth visiting.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Geographical Location
            </h2>
            <p>
              Erbil is located in <strong>northern Iraq</strong>, approximately{' '}
              <strong>350 km north of Baghdad</strong>. The city lies at the
              center of a fertile plain and is surrounded by rolling hills and
              mountains, making it a key economic and cultural hub in the
              region.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Population and Area
            </h2>
            <ul className="list-inside list-disc">
              <li>
                <strong>Population:</strong> Approximately{' '}
                <strong>1.6 million</strong> people.
              </li>
              <li>
                <strong>Area:</strong> Around <strong>15,000 km²</strong>,
                covering both urban and rural areas.
              </li>
            </ul>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Historic and Cultural Significance
            </h2>
            <p>
              Erbil is home to the <strong>Erbil Citadel</strong>, a UNESCO
              World Heritage Site, which has been continuously inhabited for
              thousands of years. The city’s rich history is reflected in its
              ancient markets, traditional Kurdish architecture, and museums
              showcasing artifacts from various civilizations, including the
              Sumerians, Assyrians, and Ottomans.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Popular Neighborhoods
            </h2>
            <ul className="list-inside list-disc">
              <li>
                <strong>Ainkawa</strong> – A vibrant district known for its
                diverse community, restaurants, and nightlife.
              </li>
              <li>
                <strong>Gulan Street</strong> – A major commercial area filled
                with high-end shops, cafes, and offices.
              </li>
              <li>
                <strong>100 Meter Road</strong> – One of the largest roads in
                Erbil, surrounding the city with modern developments.
              </li>
              <li>
                <strong>Khabat</strong> – A growing residential and business
                district.
              </li>
              <li>
                <strong>Salahaddin</strong> – A peaceful area with universities,
                parks, and recreational spaces.
              </li>
            </ul>

            <h2 className="mt-4 text-xl font-semibold text-green-400">
              Climate
            </h2>
            <p>
              Erbil has a <strong>semi-arid climate</strong>, characterized by{' '}
              <strong>hot summers and mild winters</strong>.
            </p>
            <ul className="list-inside list-disc">
              <li>
                <strong>Summer temperatures:</strong> Can reach{' '}
                <strong>45°C (113°F)</strong>.
              </li>
              <li>
                <strong>Winter temperatures:</strong> Range between{' '}
                <strong>5°C and 15°C (41°F – 59°F)</strong>, with occasional
                rainfall.
              </li>
            </ul>
            <MainAttractions />
          </div>
        </section>

        {/*button section */}
        <div className="container ml-9 mt-16 items-center justify-center">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Erbil;
