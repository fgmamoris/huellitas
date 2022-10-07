import React from 'react';
import About from './About';
import CarouselCentral from './CarouselCentral';
import Contact from './Contact';

import Footer from './Footer';

const Central = () => {
  return (
    <>
      <div className="central">
        <About className="m-4" />
        <CarouselCentral />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Central;
