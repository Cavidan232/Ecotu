import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner1 from "../images/banner.png";
import banner2 from "../images/banner2.png";
import banner3 from "../images/banner3.png";

function Card() {
    const cards = [
        { image: banner1, title: 'Indonesia - A Tropical Paradise', likes: 0 },
        { image: banner2, title: 'Australia - Explore the Outback', likes: 0 },
        { image: banner3, title: 'Switzerland - Land of the Alps', likes: 0 },
    ];

    const [cardData, setCardData] = useState(cards);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const increaseLikes = (targetLikes, index) => {
        const interval = setInterval(() => {
            setCardData((prevData) => {
                const updatedData = [...prevData];
                if (updatedData[index].likes < targetLikes) {
                    updatedData[index].likes += 1;
                } else {
                    clearInterval(interval);
                }
                return updatedData;
            });
        }, 0.6); 
    };

    useEffect(() => {
        cardData.forEach((card, index) => {
            const targetLikes = Math.floor(Math.random() * (500000 - card.likes + 1)) + card.likes; 
            increaseLikes(targetLikes, index);
        });
    }, []);

    return (
        <div>
            <section className='container mx-auto px-10 items-center flex flex-col gap-4'>
                <div className="top mb-6"><h1 className='text-5xl font-bold text-custom-yellow'>Best Travel Destinations</h1></div>
                <div className='cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {cardData.map((card, index) => (
                        <div
                            className="card flex flex-col rounded-lg overflow-hidden shadow-lg transition-all delay-100 ease-in-out w-full transform hover:scale-105 bg-gray-800"
                            data-aos="fade-up"
                            key={index}
                        >
                            <div className="image rounded overflow-hidden h-64">
                                <img src={card.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="text p-4 bg-custom-green flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">{card.title}</h3>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <button className="text-gray-400 hover:text-white focus:outline-none transform translate-x-0">
                                        <FaShoppingCart size={24} />
                                    </button>
                                    <div className="flex items-center">
                                        <button
                                            className={`focus:outline-none transform ${card.likes > 0 ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
                                            onClick={() => handleLike(index)}
                                        >
                                            {card.likes > 0 ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
                                        </button>
                                        <span className="ml-2 text-white">{card.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Card;
