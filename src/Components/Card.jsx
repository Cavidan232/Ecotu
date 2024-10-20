import React, { useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from "../images/plastik.jpg";
import image2 from "../images/kagiz2.jpg";
import image3 from "../images/image3.jpg";

function Card() {
    const cards = [
        { image: image1, title: 'Plastik Tullantılardan Yenidən İstifadə', price: '15 AZN' },
        { image: image2, title: 'Kağız Tullantılarının Yenidən İstifadəsi', price: '10 AZN' },
        { image: image3, title: 'Şüşə Tullantılarının Yenidən İstifadəsi', price: '20 AZN' },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="py-12 bg-gray-100">
            <section className="container mx-auto px-10">
                <div className="mb-8 text-center">
                    <h1 className="text-5xl font-bold text-custom-yellow mb-4">Tullantıdan Sənətə</h1>
                    <p className="text-xl text-gray-700">Yenidən istifadə ilə yaradılan ən gözəl əl işləri</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            className="card flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
                            data-aos="fade-up"
                            key={index}
                        >
                            {/* Şəkil bölməsi */}
                            <div className="relative group">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />
                                {/* Şəkil üzərinə overlay */}
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                            </div>
                            {/* Başlıq və qiymət bölməsi */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                                <p className="text-lg text-gray-600 mb-4">Qiymət: {card.price}</p>
                                <button className="mt-auto bg-custom-green text-white py-2 px-4 rounded-md flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors duration-300">
                                    <AiOutlineShoppingCart className="mr-2" /> Səbətə əlavə et
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Card;
