
import React from 'react';
import { FaStar, FaAward, FaCheckCircle } from 'react-icons/fa';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Have an Awesome Project
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold">
          Idea? <span className="text-primary">Let's Discuss</span>
        </h2>

        <form className="mt-12 max-w-xl mx-auto">
          <div className="relative flex items-center border-2 border-gray-200 rounded-full p-1 focus-within:border-primary">
            <span className="pl-4 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input type="email" placeholder="Enter Email Address" className="w-full bg-transparent p-3 text-gray-700 placeholder-gray-500 focus:outline-none" />
            <button type="submit" className="bg-primary text-black font-semibold rounded-full px-8 py-3 shrink-0">
              Send
            </button>
          </div>
        </form>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <FaStar className="text-primary"/> 4.9/5 Average Ratings
          </div>
          <div className="flex items-center gap-2">
            <FaAward className="text-primary"/> 25+ Winning Awards
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-primary"/> Certified Product Designer
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
