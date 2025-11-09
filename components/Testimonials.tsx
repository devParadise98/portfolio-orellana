
import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonialData = [
  {
    name: 'Jayesh Patil',
    title: 'CEO, Lirante',
    imgSrc: 'https://picsum.photos/seed/jayesh/100/100',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5.0,
  },
  {
    name: 'Anika Sharma',
    title: 'Marketing Head, Sugee',
    imgSrc: 'https://picsum.photos/seed/anika/100/100',
    quote: 'Sed lobortis orci elementum egestas lobortis. Praesent rhoncus, purus vitae condimen. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 5.0,
  },
   {
    name: 'Rohan Mehta',
    title: 'Founder, Cinetstox',
    imgSrc: 'https://picsum.photos/seed/rohan/100/100',
    quote: 'Duis lacus nunc, posuere in justo vulputate, bibendum sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum.',
    rating: 5.0,
  },
];

const TestimonialCard: React.FC<typeof testimonialData[0]> = ({ name, title, imgSrc, quote, rating }) => (
  <div className="bg-dark-secondary rounded-2xl p-8 relative">
    <span className="absolute top-4 left-4 text-7xl text-gray-700 font-serif opacity-50">“</span>
    <div className="flex items-center mb-4">
      <img src={imgSrc} alt={name} className="w-14 h-14 rounded-full mr-4" />
      <div>
        <h4 className="font-bold text-white">{name}</h4>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </div>
    <div className="flex text-primary mb-4">
      {[...Array(Math.floor(rating))].map((_, i) => <FaStar key={i} />)}
      <span className="ml-2 text-white font-bold">{rating.toFixed(1)}</span>
    </div>
    <p className="text-gray-300">{quote}</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-dark text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Testimonials That</h2>
          <h2 className="text-4xl md:text-5xl font-bold">Speak to <span className="text-primary">My Results</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
