import React from "react";
import "../stylesheets/ContadorClicks.css"

function ContadorPantalla({ numClicks }){

     
    return(
        <div className='Contador-pantalla'>
            { numClicks }

           

        </div>

    )
}

export default ContadorPantalla;