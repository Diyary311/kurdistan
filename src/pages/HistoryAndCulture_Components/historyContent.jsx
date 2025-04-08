import React from 'react';
import Navbar from '../../homee/Navbar';

function HistoryContent() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* History Section */}
      <section id="history" className="py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Rich History of Kurdistan</h2>
          <p className="mt-2 text-lg text-gray-600">
            A Crossroads of Civilizations
          </p>
        </div>

        <div className="space-y-12">
          {/* Timeline Item 1 */}
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="w-full md:w-1/2">
              <img
                src="src/pages/HistoryAndCulture_Components/image/photo_2025-04-08_03-18-28.jpg"
                alt="Ancient Kurdish artifacts"
                className="h-72 w-full transform rounded-lg object-cover shadow-xl transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full rounded-lg bg-white p-8 shadow-md md:w-1/2">
              <div className="mb-4 font-bold text-blue-500">3000 BCE</div>
              <h3 className="text-2xl font-semibold text-stone-950">
                Early Civilizations
              </h3>
              <p className="mt-4 text-slate-700">
                Kurdistan's history dates back to the ancient Mesopotamian
                civilizations. The region was home to...
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row-reverse">
            <div className="w-full md:w-1/2">
              <img
                src="src/pages/HistoryAndCulture_Components/image/0000.jpg"
                alt="Medieval Kurdish castle"
                className="h-72 w-full transform rounded-lg object-cover shadow-xl transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="w-full rounded-lg bg-gray-800 p-8 shadow-md md:w-1/2">
              <div className="mb-4 font-bold text-blue-500">12th Century</div>
              <h3 className="text-2xl font-semibold">Medieval Kingdoms</h3>
              <p className="mt-4">
                The Ayyubid dynasty, founded by Saladin, emerged from Kurdish
                roots to unite...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-16">
        <div className="mb-12 text-center">
          <h2
            className="text-4xl font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Vibrant Culture & Traditions
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="mt-2 text-lg text-gray-600"
          >
            Keeping Ancient Customs Alive
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Culture Card 1 */}
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="transform overflow-hidden rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:translate-y-[-5px]"
          >
            <div className="relative">
              <img
                src="src/pages/HistoryAndCulture_Components/image/photo_2025-04-08_03-18-27 (2).jpg"
                alt="Newroz celebration"
                className="h-64 w-full object-cover"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div className="p-6">
              <h3
                data-aos="fade-up"
                data-aos-duration="1500"
                className="mb-4 text-2xl font-semibold text-gray-800"
              >
                Newroz Festival
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
                className="font-semibold text-gray-800"
              >
                The Kurdish New Year celebration marking spring's arrival,
                featuring...
              </p>
            </div>
          </div>

          {/* Culture Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1800"
            className="transform overflow-hidden rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:translate-y-[-5px]"
          >
            <div className="relative">
              <img
                src="src/pages/HistoryAndCulture_Components/image/1111111.jpg"
                alt="Traditional Kurdish dance"
                className="h-64 w-full object-cover"
              />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" className="p-6">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                Traditional Dance
              </h3>
              <p className="font-semibold text-gray-800">
                The energetic Govend dance, performed in circles symbolizing
                unity...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HistoryContent;
