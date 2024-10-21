import React, { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_4nziou5',
      'CuZViCo2p695v6KQ1',
      { ...formData, to_email: 'cavidanvelizade9@gmail.com' },
      'CuZViCo2p695v6KQ1'
    )
    .then((response) => {
      console.log('Mesaj uğurla göndərildi', response.status, response.text);
      toast.success('Mesajınız uğurla göndərildi!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    })
    .catch((err) => {
      console.error('Mesaj göndərilmədi:', err);
      toast.error(`Mesaj göndərilmədi: ${err.text}`);
    });
  };

  return (
    <section className="bg-emerald-200 py-16">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-teal-800 text-center mb-8">
          ECOTU Emalatxanası ilə Əlaqə
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-12">
          Fiziki məhdudiyyətli şəxslərə ikinci əl məhsullardan və tullantılardan yeni və faydalı məhsullar yaratmaqda yardım edirik. Bizimlə əlaqə saxlayaraq bu möhtəşəm layihəyə dəstək ola bilərsiniz.
        </p>

        <div className="flex justify-center items-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-teal-700">
            <FiPhoneCall className="text-3xl" />
            <a href="tel:+994556649893" className="text-xl font-semibold hover:underline">
              +994 55 664 98 93
            </a>
          </div>
          <div className="flex items-center gap-2 text-teal-700">
            <MdEmail className="text-3xl" />
            <a href="mailto:ecotu@gmail.com" className="text-xl font-semibold hover:underline">
              ecotu@gmail.com
            </a>
          </div>
        </div>

        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Adınız <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="Adınızı daxil edin"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="E-mail adresinizi daxil edin"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Mesajınız <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="Mesajınızı daxil edin"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors"
            >
              Göndər
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
