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
import React, { Component } from "react";
import { Link } from 'react-router-dom'



/* De 08-061, EventListeners, volvemos a pasar el componente a tipo clase*/
export default class PortfolioItem extends Component {

    constructor(props){

        super(props)

        this.state = {

            portfolioItemClass: ""
        }
    }

    handleMouseEnter() {

        this.setState( {

            portfolioItemClass: 'image-blur'
        })

    }

    handleMouseLeave() {

        this.setState( {
        
            portfolioItemClass: ""
        })

    }
    

    render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <div
        className="portfolio-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div
          className={
            "portfolio-img-background " + this.state.portfolioItemClass
          }
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>

          <div className="subtitle">{description}</div>
        </div>
      </div>
    );
  }
}