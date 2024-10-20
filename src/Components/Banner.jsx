import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner1 from "../images/bannerEcotu.jpg";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";

const Banner = () => {
  const slides = [
    { image: banner1, title: 'Fiziki  məhdudiyyətli şəxslərin tullantılardan əl işləri platforması' },
    { image: banner2, title: 'Kağız materiallardan incə sənət nümunələri' },
    { image: banner3, title: 'Şüşə tullantılardan dekorativ əşyalar' },
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
    <div className="w-full relative h-screen font-playfair">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ left: 0, top: 0, width: '100%', height: '100%' }}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black bg-opacity-40 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg tracking-wide">{slide.title}</h2>
            <span className="text-gray-200 text-md md:text-lg lg:text-xl mt-2">
              Yaradıcılığınızı {slide.title.split(' ')[0]} ilə nümayiş etdirin
            </span>
          </div>
        </div>
      ))}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300"
      >
        &#10094;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;
