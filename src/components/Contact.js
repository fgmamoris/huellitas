import React from 'react';
import '../assets/css/Contact.css';
import FormContact from './FormContact';
import ImgContact from './ImgContact';

const Contact = () => {
  return (
    <section id="contacto">
      <h2 className="text-center">Contacto</h2>
      <div>
        <div id="contact-content" className="row g-0">
          <ImgContact />
          <div className="col-lg-6 p-2">
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
