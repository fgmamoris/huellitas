import React from 'react';
import img from '../assets/img/contact.jpg';

const ImgContact = () => {
  return (
    <div className="col-6 img-contact">
      <img src={img} className="mw-100 h-100" alt="imagen de contacto"></img>
    </div>
  );
};

export default ImgContact;
