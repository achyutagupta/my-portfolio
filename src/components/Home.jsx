import React from 'react';
import HeroImage from '../assets/heroImage.png';
import {MdOutlineArrowRight} from 'react-icons/md';

const Home = () => {
  return (
    <div name="home" className='h-screen w-100 bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white' >
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, aut necessitatibus. Alias rerum ea, consectetur, incidunt, ex ipsa accusamus hic quidem laudantium officia fugiat voluptatem consequuntur? Doloribus vero quasi id!
                </p>
                <div>
                    <button className=' group text-white font-semibold w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        PortFolio
                        <span className='group-hover:rotate-90 duration-300 '>
                        <MdOutlineArrowRight size={30} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"  />
            </div>

        </div>





      {/* <img src={HeroImage} alt=""/> */}
      {/* <HiArrowRight/> */}
    </div>
  )
}

export default Home;
