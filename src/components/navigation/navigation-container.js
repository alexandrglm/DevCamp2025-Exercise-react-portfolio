// De 07-30 Elvis
import React, { Component } from "react";


// De 07-032 NavLinks
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom";


export default class NavigationContainer extends Component {

    constructor() {
        super()

    }

    render() {

        const elPattern = '../../../static/assets/pattern1.png'
        return (


            // De 08-053: FLEXBOX, le damos ya la estructura final
            <div className="nav-wrapper" style={{ backgroundImage: `url(${elPattern})` }} >
                <div className="left-side">

                    <div className="nav-link-wrapper">
                        {/* 08-054, ENVOLVEMOS CADA LINK EN SU nav-link-wrapper */}
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>
                    

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/about-me" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/blog" activeClassName="nav-link-active">
                            Blog
                        </NavLink>
                    </div>

                    {/* {/* Aquí comienzan las ternary para discernir qué mostrar */ }
                    { /* false ? <button> Add blog</button> : null } */ }

                    <div className="right-side">
                        <a>
                            Alexandr Gomez
                        </a>
                    </div>
                </div>
            </div>

        )


    }

}
