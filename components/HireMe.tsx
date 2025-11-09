
import React from 'react';

const HireMe: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-light-gray rounded-3xl p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full max-w-sm mx-auto">
               <div className="absolute top-1/2 -translate-y-1/2 -left-8 w-48 h-48 md:w-64 md:h-64 bg-primary rounded-full" />
              <img 
                src="https://picsum.photos/id/1027/400/500" 
                alt="Why Hire Me" 
                className="relative z-10 rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why <span className="text-primary">Hire me?</span></h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
              </p>
              <div className="flex space-x-12 mb-8">
                <div>
                  <p className="text-4xl font-bold">450+</p>
                  <p className="text-gray-500">Project Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">450+</p>
                  <p className="text-gray-500">Project Completed</p>
                </div>
              </div>
              <a href="#contact" className="inline-block bg-white text-black font-semibold rounded-full px-8 py-3 border-2 border-gray-300 hover:bg-primary hover:border-primary transition-colors">
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
