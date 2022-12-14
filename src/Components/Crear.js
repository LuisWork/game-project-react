import React, { useState } from "react";

export const Agregar = () => {
  const tituloComponente = "Agregar Juego";
  const [juegoState, setJuegoState] = useState({
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = juegoState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    //Conseguir Datos del Formulario

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //Crear objeto de la pelicula a guardar

    let juego = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    setJuegoState(juego);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {titulo && descripcion
          ? "Juego Creado: " + titulo
          : `No se a podio agregar el Juego...`}
      </strong>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
        <textarea
          placeholder="Descripcion"
          id="descripcion"
          name="descripcion"
        ></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
