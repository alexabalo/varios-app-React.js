import React from "react";

import Reloj from "./Components/Reloj";
import Testimonio from "./Components/Testimonio";
import { doctor } from "./Imagenes";
import { pedro } from "./Imagenes";
import ContadorClicks from "./Components/ContadorClicks";
import "./stylesheets/App.css";

function App() {
  return (
    <div>

      <Reloj />

      <div className="App">
        <div className="contenedor-principal">
          <h1 className="titulo-testimonio">App-Testimonios</h1>
        </div>
        <Testimonio
          nombre="Rick Sanchez"
          cargo="cientifico y genio"
          imagen={doctor}
          testimonio="Lorem ipsum dolor, sit amet consectetur adipisicing 
        elit. Consectetur quidem facilis modi nostrum ipsam excepturi ipsum? Ad at ut et
        Lorem ipsum dolor, sit amet consectetur adipisicing 
        elit. Consectetur quidem facilis modi nostrum ipsam excepturi ipsum? Ad at ut et."
        />

        <Testimonio
          nombre="morty"
          cargo="cientifico y genio"
          imagen={pedro}
          testimonio="Lorem ipsum dolor, sit amet consectetur adipisicing 
        elit. Consectetur quidem facilis modi nostrum ipsam excepturi ipsum? Ad at ut et
        Lorem ipsum dolor, sit amet consectetur adipisicing 
        elit. Consectetur quidem facilis modi nostrum ipsam excepturi ipsum? Ad at ut et."
        />

        <Testimonio
          nombre="morty"
          cargo="nuevo-testimonio"
          imagen={pedro}
          testimonio="Lorem ipsum dolor, sit amet consectetur adipisicing 
        elit. Consectetur quidem facilis modi nostrum ipsam excepturi ipsum? Ad at ut et
        Lorem ipsum dolor, sit amet consectetur adipisicing 
        elit. Consectetur quidem facilis modi nostrum ipsam excepturi ipsum? Ad at ut et."
        />

        
      </div>

      <ContadorClicks/>

    </div>
  );
}

export default App;
