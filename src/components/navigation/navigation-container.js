// De 07-30 Elvis
import React, { Component } from "react";


// De 07-032 NavLinks
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom";


export default class NavigationComponent extends Component {

    constructor() {
        super()

    }

    render() {

        return (

            <div>
                {/* Los botones serán reemplazados por Navlinks */}
                <NavLink exact to="/" activeClassName="nav-link-active">
                    Home
                </NavLink>

                <NavLink exact to="/about-me" activeClassName="nav-link-active">
                    About
                </NavLink>


                {/* Quitamos el cambio a activeClassName para ver diferencias */ }
                <NavLink exact to="/contact" >
                    Contact
                </NavLink>

                <NavLink exact to="/blog">
                    Blog
                </NavLink>
                
                {/* Aquí comienzan las ternary para discernir qué mostrar */ }
                { false ? <button> Add blog</button> : null }
            </div>

        )


    }

}