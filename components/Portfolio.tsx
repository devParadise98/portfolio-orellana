
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const tags = ['Landing Page', 'Product Design', 'Animation', 'Glassmorphism', 'Cards'];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Lets have a look at <br /> my <span className="text-primary">Portfolio</span>
          </h2>
          <a href="#" className="bg-primary text-black font-semibold rounded-full px-6 py-3">
            See All
          </a>
        </div>
        <div className="relative mb-8">
          <img src="https://picsum.photos/seed/portfolio/1200/600" alt="Lirante Project" className="rounded-3xl w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl"></div>
          <h3 className="absolute bottom-8 left-8 text-white text-5xl font-bold">Lirante</h3>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="md:flex md:justify-between md:items-start">
          <div>
            <h4 className="text-3xl font-bold flex items-center gap-4">
              Lirante - Food Dilvery Solution 
              <span className="bg-primary text-black rounded-full p-2">
                <FiArrowUpRight size={24}/>
              </span>
            </h4>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
