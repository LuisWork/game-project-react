import React from "react";

export const Agregar = () => {
  return (
    <div className="add">
      <h3 className="title">Agregar Juego</h3>
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Descripcion"></textarea>
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};
