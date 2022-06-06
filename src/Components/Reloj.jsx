import React, {useState, useEffect} from "react";
import "../stylesheets/Reloj.css"

function Reloj() {
    const [relojState, setRelojState] = useState();

    useEffect(() => {
        setInterval(() => {
           const date = new Date();
           setRelojState(date.toLocaleTimeString());

        }, 1000);
    }, []);


    return (
        <div className="fondo1">
            <h1 className="titulo1">App-reloj</h1>
            <div className="centro1">   
                <div>{relojState}</div>
            </div>
        </div>
    
    );
    

}

export default Reloj;