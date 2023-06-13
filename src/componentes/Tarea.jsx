import React from "react";
import "../hojas-de-estilo/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-contenedor-iconos">
        <div className="tarea-texto" onClick={() => completarTarea(id)}>
          {texto}
        </div>
      </div>
      <AiOutlineCloseCircle
        className="tarea-icono"
        onClick={() => eliminarTarea(id)}
      />
    </div>
  );
}

export default Tarea;
