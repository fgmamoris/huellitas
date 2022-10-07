import React from 'react';
import { Button, Form, Label } from 'reactstrap';

const FormContact = () => {
  return (
    <div className="form-content">
      <span className="col-lg-8 mb-5">
        Si estás interesado en saber más sobre nosotros, podes dejar tus datos y
        nos pondremos en contacto a la brevedad.
      </span>
      <Form action="#">
        <div className="mb-3 ">
          <Label htmlFor="inputNameContact" className="form-label">
            Nombre
          </Label>
          <input
            type="text"
            className="form-control"
            id="inputNameContact"
            placeholder="Ingrese su nombre"
          ></input>
        </div>
        <div className="mb-3 ">
          <Label htmlFor="inputEmailContact" className="form-label">
            Email
          </Label>
          <input
            type="email"
            className="form-control"
            id="inputEmailContact"
            placeholder="correo@example.com"
          ></input>
        </div>
        <div className="mb-3 ">
          <Label htmlFor="inputComentContact" className="form-label">
            Comentario
          </Label>
          <textarea
            className="form-control"
            id="inputComentContact"
            placeholder="Ingrese su comentario"
            rows="3"
          ></textarea>
        </div>
        <div id="button-form-contact" className="mb-3 text-center">
          <Button className="btn btn-info " type="button">
            Enviar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormContact;
