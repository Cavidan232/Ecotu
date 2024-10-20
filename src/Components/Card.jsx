import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from "../images/plastik.jpg"; // This should be the first banner image
import image2 from "../images/kagizev.jpg";
import image3 from "../images/image1.jpg";

function Card() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const cards = [
        { id: 1, image: image1, title: 'Plastik gülqabı', description: 'Plastik tullantılardan hazırlanmış gülqabı', price: '15 AZN' },
        { id: 2, image: image2, title: 'Kağız ev', description: 'Kağız tullantılardan hazırlanmış ev', price: '10 AZN' },
        { id: 3, image: image3, title: 'Şüşə Lampa', description: 'Şüşə tullantılardan hazırlanmış lampa', price: '20 AZN' },
        { id: 4, image: image1, title: 'Plastik gülqabı', description: 'Plastik tullantılardan hazırlanmış gülqabı', price: '15 AZN' },
        { id: 5, image: image2, title: 'Kağız ev', description: 'Kağız tullantılardan hazırlanmış ev', price: '10 AZN' },
        { id: 6, image: image3, title: 'Şüşə Lampa', description: 'Şüşə tullantılardan hazırlanmış lampa', price: '20 AZN' },
        // Add more cards as needed
    ];

    const filteredCards = cards.filter(card => {
        return (
            (category === '' || card.title.includes(category)) &&
            (searchTerm === '' || card.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const indexOfLastCard = currentPage * itemsPerPage;
    const indexOfFirstCard = indexOfLastCard - itemsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

    const numberOfPages = Math.ceil(filteredCards.length / itemsPerPage);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setCurrentPage(1); // Reset to the first page on category change
    };

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to the first page on search term change
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div 
            className="p-10 min-h-screen bg-white" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image1})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        >
            <ToastContainer />
            <div className="container mx-auto px-10">
                <div className="crud flex flex-col w-full gap-40 items-center">
                    <div className="top flex items-center flex-col justify-center w-full">
                        <span className="font-bold text-yellow-500 text-5xl mt-4 text-center" data-aos="fade-up">Təkliflərimiz</span>
                        <select 
                            className="mt-4 cursor-pointer p-2 border border-gray-700 rounded bg-green-200 text-black"
                            onChange={handleCategoryChange}
                            value={category}
                        >
                            <option value="">Bütün Kateqoriyalar</option>
                            <option value="Plastik">Plastik</option>
                            <option value="Kağız">Kağız</option>
                            <option value="Şüşə">Şüşə</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Axtar..."
                            className="mt-4 p-2 border border-gray-700 rounded bg-green-200 text-black"
                            value={searchTerm}
                            onChange={handleSearchTermChange}
                        />
                    </div>

                    <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {currentCards.length > 0 ? (
                            currentCards.map((card) => (
                                <div key={card.id} className="card flex flex-col rounded-lg overflow-hidden shadow-lg transition-all delay-100 ease-in-out w-full transform hover:scale-105 bg-white" data-aos="fade-up">
                                    <div className="image rounded overflow-hidden h-64">
                                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text p-4 bg-white flex flex-col flex-grow justify-between">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{card.title}</h3>
                                            <p className="text-gray-600">{card.description}</p>
                                            <p className="text-yellow-500 mt-2">{card.price}</p>
                                        </div>
                                        <div className="flex justify-between items-center mt-4">
                                            <button onClick={() => console.log(`Add ${card.id} to basket`)} className="text-gray-400 hover:text-yellow-500 focus:outline-none">
                                                <AiOutlineShoppingCart size={24} />
                                            </button>
                                            <button onClick={() => console.log(`Toggle favorite ${card.id}`)} className="text-gray-400 hover:text-yellow-500 focus:outline-none">
                                                <AiOutlineHeart size={24} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-gray-800 text-center mt-4">"{searchTerm}" üçün uyğun heç bir əşya tapılmadı</div>
                        )}
                    </div>

                    <div className="pagination mt-10 flex justify-center">
                        {Array.from({ length: numberOfPages }, (_, index) => (
                            <button 
                                key={index + 1} 
                                onClick={() => paginate(index + 1)} 
                                className={`mx-1 px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-yellow-500 text-gray-900' : 'bg-green-300 text-black'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
