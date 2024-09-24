import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner1 from "../images/banner.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";
const Banner = () => {
  const slides = [
    { image:banner1, title: 'Cavidicano' },
    { image:banner2, title: 'Testimicano' },
    { image:banner3, title: 'Samiricano' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ left: 0, top: 0, width: '100%', height: '100%' }}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-6xl font-great-vibes md:text-6xl text-custom-yellow italic">{slide.title}</h2>
            <span className='text-white text-3xl font-bold'> Best Restaurant </span>
          </div>
        </div>
      ))}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-4 py-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;