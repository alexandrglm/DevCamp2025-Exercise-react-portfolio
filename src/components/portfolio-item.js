// From Module 07 - React PROPS guide

/*
Entender bien PROPS:

    - Sintaxis JS típica

function Hola(nombre, edad){
    return `Hola ${nombre}, tienes ${edad} años!`;
}

saludar('Pepe', 25);

          |  |
          |  |
    Convertido en React PROPS
          |  |
          |  |
       \  |  |  /
        \ |  | /
         \|  |/
          \  /
           \/

function Hola (props) {

    return <h1>Hola {props.nombre}, tienes {props.edad} años!</h1>

}

<Hola nombre="Pepe" edad={25} />


!!! PARA EL CAMBIO, EVIDENTEMENTE, HAY QUE MODIFICAR EL RENDER()!!!!
*/

import React from "react";

const PortfolioItem = (props) => {

    console.log("[NOTICE] --> Props recibidos:", props)

    // De la guia 07 JSX/Babel, demostramos expresiones JSX
    const itemClass = "portfolio-item-wrapper"
    const isActive = true
    const backgroundColor = props.title.length > 10 ? "lightblue" : "limegreen"


    return (

        <div 
            className="portfolio-item-wrapper"
            style={{ backgroundColor }}    
        >
            <h3>{props.title.toUpperCase()}</h3>
            <p>
                <a href={props.url} target="_blank">
                    {props.url}
                </a>
            </p>

            {/* Comentarios en JS pasados a JSX */}
            {isActive && <span>Active</span>}

            {/* Ejemplo para Expresiones complejas */ }
            <small> Length: {props.title.length} chars.</small>

        </div>
    );
}

export default PortfolioItem;