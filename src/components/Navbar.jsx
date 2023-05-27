import React, {useState} from 'react';
import {FaBars , FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [nav , setNav] = useState(false);

    const links = [
        {
            id:1,
            link: 'home'
        },
        {
            id:1,
            link: 'about'
        },
        {
            id:1,
            link: 'portfolio'
        },
        {
            id:1,
            link: 'experience'
        },
        {
            id:1,
            link: 'contact'
        }
    ];


  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed px-4 bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">Achyuta</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((links) => (
            <li key={links.id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">{links.link}</li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
      </div>
        {nav && <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map((links) => (
            <li key={links.id} className="px-4 cursor-pointer capitalize py-6 text-4xl">{links.link}</li>
            ))}
        </ul>
        }
        
    </div>
  );
};

export default Navbar
