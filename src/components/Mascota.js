import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import '../assets/css/Mascota.css';
const Mascota = ({ mascota, toggleModal, toggleSelection }) => {
  const selectMascotaDetail = () => {
    toggleSelection(mascota);
    toggleModal();
  };
  return (
    <Card className="card">
      <div className="content-img">
        <img
          src={mascota.img}
          className="w-100 img-mascota"
          alt={`imagen de ${mascota.nombre}`}
        ></img>
        {/* <img
          alt={`imagen de ${mascota.nombre}`}
          src={mascota.img}
          className="img-fluid img-mascota"
        /> */}
      </div>

      <CardBody>
        <CardTitle tag="h5">{mascota.nombre}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {mascota.raza}
        </CardSubtitle>
        <Button onClick={(mascota) => selectMascotaDetail(mascota)}>
          Saber más de {mascota.nombre}
        </Button>
      </CardBody>
    </Card>
  );
};

export default Mascota;
