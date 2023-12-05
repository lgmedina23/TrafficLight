import React, {useState} from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState("");

    // cuando hacemos click en el circulo rojo hacemo que color sea igual a red
    // En las clases del circulo rojo pregunto si color es igual a rojo, por el si agrego la clase glow-red y sino agrego espacio vacio.
    // Repetir lo mismo para yellow y green.

    return (
        <div className="box ">
            <div className={`light light-red ${color == 'red' ? 'glow-red' : '' }`} onClick={() => setColor ("red")}></div>
            <div className={`light light-yellow ${color == 'yellow' ? 'glow-yellow' : ''}`} onClick={() => setColor ("yellow")}></div>
            <div className={`light light-green ${color == 'green' ? 'glow-green' : ''}`} onClick={() => setColor ("green")}></div>
        </div>
    )
};
