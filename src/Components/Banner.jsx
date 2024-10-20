import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner1 from "../images/banner1.jpg"; // Set as background
import banner2 from "../images/bg.webp";
import banner3 from "../images/bannerEcotu.jpg";

const Banner = () => {
  const slides = [
    { image: banner1, title: 'Fiziki məhdudiyyətli şəxslər üçün tullantılardan yaradıcı əl işləri platforması!' },
    { image: banner2, title: 'Tullantılarınızı boşa verməyin - təkrar emal edərək yeni imkanlar yaradın!' },
    { image: banner3, title: 'Tullantılardan gözəl və unikal dekorativ əşyalar yaradın – kreativliyinizlə dünyanı bəzəyin!' },
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
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen font-playfair bg-cover bg-center"
         style={{ backgroundImage: `url(${slides[currentIndex].image})`, filter: 'brightness(0.7)' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ left: 0, top: 0, width: '100%', height: '100%' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center">
            <div className="max-w-2xl w-full px-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg tracking-wide" data-aos="fade-up">
                {slide.title}
              </h2>
            </div>
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
