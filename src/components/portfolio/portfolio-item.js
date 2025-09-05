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

    // DEPRECATED:  De la guia 07 JSX/Babel, demostramos expresiones JSX
    // const itemClass = "portfolio-item-wrapper"
    const isActive = true
    // const backgroundColor = props.title.length > 5 ? "lightblue" : "limegreen"

    // De 088-049 -> DESTRUCTURING components' keys into var
    /*
    Valores documentados usando Object.keys(item) con debugger
        [
        "id",
        "name",
        "description",
        "url",
        "category",
        "position",
        "thumb_image_url",
        "banner_image_url",
        "logo_url",
        "column_names_merged_with_images"
        ]
    */
    const {
        id,
        description,
        thumb_img_url,
        logo_url
    } = props.item


    return (
        // Se retiraron los debugs backgroundColour y la logica elvis length
        <div>
            <h3>
                <Link to={`/portfolio/${id}`}>
                    {props.item.name}
                </Link>
            </h3>
            <div>{description}</div>
        </div>
            

    );
}

export default PortfolioItem;