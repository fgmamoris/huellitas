import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const ModalMascota = ({ modalStatus, toggle, mascota }) => {
  return (
    mascota && (
      <Modal isOpen={modalStatus} toggle={toggle}>
        <ModalHeader toggle={toggle}>Hola! Soy {mascota.nombre}</ModalHeader>
        <ModalBody>
          Tengo {mascota.edad_aprox}, soy de tamaño {mascota.tamaño}, soy del
          tipo {mascota.tipo} y mi raza es {mascota.raza}, puede que mi nombre
          no lo aclare pero soy{' '}
          {mascota.genero.toLowerCase() === 'h' ? 'Hembra' : 'Macho'}.El estado
          de mis vacunas es {mascota.vacunas}, mi situación con la veterinaria
          es última visita {mascota.visita_vete}, además
          {mascota.enfermedades === 'ninguna' ||
          mascota.enfermedades === 'ninguno'
            ? ' no tengo enfemedades'
            : `tengo ${mascota.enfermedades}`}
          , es bueno que sepas que{' '}
          {mascota.castrado ? 'estoy castrado/a' : 'no estoy castrado/a'}.
          Actualmente estoy con {mascota.tratamiento} tratamiento. Mis
          actividades preferidas son:
          <ul>
            {mascota.actividades.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
          Y según la gente que me cuida en el regufio tengo las siguientes
          cualidades:
          <ul>
            {mascota.cualidades.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
          Me gustaría que sepas que mi caracter es:
          <ul>
            {mascota.caracter.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
          Para ir terminando mi presentación, te cuento sobre mi alimentación:
          <ol>
            {mascota.comida.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ol>
        </ModalBody>
      </Modal>
    )
  );
};

export default ModalMascota;
