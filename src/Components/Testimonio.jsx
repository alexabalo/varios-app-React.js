import React from "react";
import "../stylesheets/Testimonio.css";





function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
        <img src={props.imagen} className='imagen-testimonio' />
        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>{props.nombre}</p>
            <p className='cargo-testimonio'>{props.cargo}</p>
            <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
       </div>
    );
  }

export default Testimonio;