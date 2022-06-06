import React from "react";
import "../stylesheets/ContadorClicks.css";
import ContadorPantalla from "./ContadorPantalla"; "./ContadorPantalla";
import { useState } from "react";
import Boton from "./Boton";

function ContadorClicks(){

    const [numClicks, setNumClicks] = useState(0);

    const manejarClick = () => {
         setNumClicks(numClicks + 1);
        }
    
    const reiniciarContador = () =>{
        setNumClicks(0)
    }

    return(

        <div className="contenedor">
            <div className="titulo">
                <h1>App-Contador de clicks</h1>
            </div>
                <ContadorPantalla numClicks={numClicks}/>
            <div>
                <Boton 
                texto='Click'
                esBotonDeClick={true}
                manejarClick={manejarClick}/>
                

                <Boton 
                texto='Reiniciar'
                esBotonDeClick={false}
                manejarClick={reiniciarContador} />
            </div>
        </div>

    );
}

export default ContadorClicks;