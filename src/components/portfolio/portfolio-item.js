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


export default function(props) {

    console.log("[NOTICE] --> Props recibidos:", props)

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
        thumb_image_url,
        logo_url
    } = props.item


    return (

        /* De 08-059*/
        <div className="portfolio-item-wrapper">

            <div className="portfolio-img-background" 
                style={{ backgroundImage: `url(${thumb_image_url})` }} /> {/* No era mejor usar backtips? */ }
            
            {/* De 08-060:  overlaying img, text, overr bg img */}
            <div className="img-text-wrapper">

                <div className="logo-wrapper">
                    
                    <img src={logo_url} /> 
                
                </div>
            
            </div>

            <div className="subtitle">
                {description}
            </div>
            

            {/* De 08-060   Removing direct link */}
            <Link to={`/portfolio/${id}`}></Link>
            {/* props.item.name */ }

        </div>
            

    );
}
