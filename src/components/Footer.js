import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="text-center">
      <Container className="p-4">
        <section id="redes" className="">
          <Row className="m-auto">
            <Col lg="4" md="4" className="mb-4 mb-md-0">
              <h5>Nuestras redes</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    color="primary"
                    className="m-1 link-footer"
                    href="https://www.facebook.com/huellitas-ong"
                  >
                    <i className="fa-brands fa-facebook "></i>
                  </a>
                </li>
                <li>
                  <a
                    className="m-1 link-footer"
                    href="https://www.twitter.com"
                    style={{ color: 'cyan' }}
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    color=""
                    className=" m-1 link-footer"
                    style={{ color: 'orange' }}
                    href="https://www.instagram.com"
                  >
                    <i className="fa-brands fa-instagram "></i>
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg="4" md="4" className="mb-4 mb-md-0">
              <h5 className="">Días y teléfonos</h5>
              <ul className="list-unstyled mb-0">
                <li className="text-footer ">
                  <i className="fa-regular fa-clock"></i> Lunes a Sabados de 10
                  a 18hs
                </li>
                <li className="text-footer">
                  <i className="fa-solid fa-phone"></i> +549-11-3030-5252
                </li>
                <li>
                  <a
                    className="m-1 link-footer"
                    href="https://wa.me/+5491133333333?text=¡Estoy+interesado!"
                  >
                    <i
                      className="fa-brands fa-whatsapp text-success-50"
                      style={{ color: 'RGB(89, 206, 114)' }}
                    ></i>
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg="4" md="4" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Ubicacion</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Row className="m-auto">
                    <iframe
                      title="Ubicacion"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48157.96082452638!2d-59.09927475072429!3d-34.647394601356844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc8827605fc157%3A0xc70a619ba0b96fb1!2sPuente%20del%20Arroyo%20de%20Arias!5e0!3m2!1ses!2sar!4v1665111993056!5m2!1ses!2sar"
                      style={{ width: '600', height: '450', border: '0 ' }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Row>
                </li>
              </ul>
            </Col>
          </Row>
        </section>
      </Container>

      <div className="text-center p-3 copyrigth">
        © {new Date().getFullYear()} Copyright
        <br />
        <i>Desinged by Federico Mamoris</i>
      </div>
    </footer>
  );
};

export default Footer;
