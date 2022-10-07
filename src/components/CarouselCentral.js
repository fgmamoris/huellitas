import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import Mascota from './Mascota';
import ModalMascota from './ModalMascota';
import '../assets/css/CarouselCentral.css';
const CarouselCentral = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    netbook: {
      breakpoint: { max: 1024, min: 700 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 700, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [mascotas, setMascotas] = useState([]);
  const [modal, setModal] = useState(false);
  const [mascotaDetail, setMascotaDetail] = useState();

  const toggle = (e) => {
    setModal(!modal);
  };

  const toggleMascotaSelected = (mascotaDetail) =>
    setMascotaDetail(mascotaDetail);

  /*   const toggleMascotaSelected = ((mascotaDetail) =>
    setMascotaDetail(mascotaDetail)
  ); */

  useEffect(() => {
    fetch(`https://fgmamoris.github.io/api-mascotas/data/mascotas.json`)
      .then((res) => res.json())

      .then((data) => {
        setMascotas(data);
      });
    //
  }, []);

  return (
    <div style={{ margin: '10px' }}>
      <h2 className="text-center">
        Ellos son algunos de los que están buscando una familia
      </h2>
      {mascotas.length === 0 ? (
        <h5>
          Por el momento pudimos encontrarle una familia a todos las mascotas
          del refugio
        </h5>
      ) : (
        <Carousel responsive={responsive}>
          {mascotas.map((m, i) => (
            <div key={m.id} style={{ borderRadius: '50px', padding: '1rem' }}>
              <Mascota
                mascota={m}
                toggleModal={toggle}
                toggleSelection={toggleMascotaSelected}
              />
            </div>
          ))}
        </Carousel>
      )}
      {/*   <CSSTransition nodeRef={nodeRef} in timeout={5200} classNames="fade">
        <div ref={nodeRef}>
          {' '}
          <ModalMascota
          animation="false" 
            modalStatus={modal}
            toggle={toggle}
            mascota={mascotaDetail}
          />
        </div>
      </CSSTransition> */}

      <ModalMascota
        modalStatus={modal}
        toggle={toggle}
        mascota={mascotaDetail}
      />
    </div>
  );
};

export default CarouselCentral;
