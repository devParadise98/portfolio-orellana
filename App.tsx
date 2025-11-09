
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import HireMe from './components/HireMe';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Marquee from './components/Marquee';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Experience />
        <HireMe />
        <Portfolio />
        <Testimonials />
        <CallToAction />
        <Marquee />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;
