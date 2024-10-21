import React from 'react';
import cavidan from "../images/team/cavidan.jpg";
import rafet from "../images/team/rafet.jpg";
import humay from "../images/team/humay.jpg";
import sefiqe from "../images/team/sefiqe.jpg";
import fayime from "../images/team/fatime.jpg";

const TeamMember = ({ name, role, description, image }) => (
  <div className="bg-white  shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 text-center">
    <div className="flex justify-center">
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 mt-4" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-600 mb-2">{role}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);

// Komanda komponenti
const Team = () => {
  const teamMembers = [
    {
      name: 'Fatimə Muradlı',
      role: 'SMM',
      description: 'Sosial media strategiyaları və kompaniyalarının hazırlanmasında ixtisaslaşmışdır.',
      image: fayime,
    },
    {
      name: 'Şəfiqə Həsənzadə',
      role: 'Dizayner',
      description: 'Vizual dizayn, marka identikliyi və istifadəçi təcrübəsi sahəsində peşəkardır.',
      image: sefiqe,
    },
   
    {
      name: 'Humay Əliyeva',
      role: 'Satış Meneceri',
      description: 'Müştəri əlaqələrinin idarə edilməsi və satış strategiyalarının inkişaf etdirilməsində mütəxəssisdir.',
      image: humay,
    },
    {
      name: 'Cavidan Vəlizadə',
      role: 'Developer',
      description: 'Texnologiya layihələrinin icrası və IT infrastrukturunun idarə olunmasında peşəkar dəstək təqdim edir.',
      image: cavidan,
    },
    {
        name: 'Rafət Şirəliyev',
        role: 'Mentor',
        description: 'Təcrübəli mentor olaraq komanda üzvlərinə rəhbərlik edir və inkişaflarına dəstək olur.',
        image: rafet,
      },
  ];

  return (
    <div className="container  bg-slate-700 mx-auto pt-[100px] pb-[100px] ">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Komandamız</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
