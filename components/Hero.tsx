
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { images } from '@/assets/images';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white pt-10 pb-20 text-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="inline-block bg-white border border-gray-200 rounded-full px-4 py-1 mb-4">
          <span className="text-sm">Hello! 👋</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
          I'm <span className="text-primary">Miryan</span>,
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mt-2">
          Front End Developer
        </h1>

        <div className="mt-8 flex justify-center items-end">
          <div className="relative w-full max-w-lg">
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-primary rounded-full" />
            <img
              src={images.profileImage}
              alt="Jenny, Product Designer"
              className="relative z-10 w-full max-w-xs md:max-w-sm mx-auto"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4 glassmorphism border border-white/20 rounded-full px-4 py-3">
              <a href="#portfolio" className="bg-primary text-black font-semibold rounded-full px-6 py-2 flex items-center gap-2">
                Portfolio <FiArrowUpRight />
              </a>
              <a href="#contact" className="text-white font-semibold rounded-full px-6 py-2">
                Hire me
              </a>
            </div>
          </div>
        </div>

        {/* <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-20 max-w-xs text-left hidden md:block">
          <p className="text-gray-600 text-lg">
            <span className="text-primary text-4xl font-serif">“</span>
            Jenny's Exceptional product design ensure our website's success.
            <span className="font-bold block mt-2">Highly Recommended</span>
          </p>
        </div> */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-20 text-left hidden md:block">
          <div className="flex text-primary text-2xl">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="text-5xl font-bold mt-2">5 <span className="text-gray-400">Years</span></p>
          <p className="text-gray-600">Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
