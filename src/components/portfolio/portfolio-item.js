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
/*
Desde la 07-035 Accessing URL Values, añadimos componete Link,
y modificamos para crear los links dinámicos de Portfolio

De momento seguimos dejando los debugs de otrsa guías, pero esto cambiará.
*/
import React from "react";
import { Link } from 'react-router-dom'


const PortfolioItem = (props) => {

    console.log("[NOTICE] --> Props recibidos:", props)

    // De la guia 07 JSX/Babel, demostramos expresiones JSX
    const itemClass = "portfolio-item-wrapper"
    const isActive = true
    const backgroundColor = props.title.length > 5 ? "lightblue" : "limegreen"


    return (
        // Mantenemos los debugs, pero es posible que haya que ir quitándolos
        <div 
            className="portfolio-item-wrapper"
            style={{ backgroundColor }} 
        >
            <div>
                <h3>{props.title}</h3>
                <h4>{props.url}</h4>
                <Link to={`/portfolio/${props.slug}`}>
                
                    {props.title.toUpperCase()}
                </Link>
            </div>
            
            {/* <p>
                <a href={props.url} target="_blank" rel="noopener noreferrer">
                    {props.url}
                </a>
            </p> */}

            {/* Comentarios en JS pasados a JSX */}
            {isActive && <span>Active</span>}

            {/* Ejemplo para Expresiones complejas */ }
            <small> Length: {props.title.length} chars.</small>

        </div>
    );
}

export default PortfolioItem;