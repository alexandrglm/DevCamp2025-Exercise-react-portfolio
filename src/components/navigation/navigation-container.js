/*
 * Desde 08-075 Refactorizamos de ClassComponent a FunctionaComponent. 
 * Aprovechamops para limpiar
*/ 
import React, { useState } from "react";

// Mantenemos esto para el bg del nav
import elPattern from '../../../static/assets/pattern1.png'

const NavigationContainer = () => {

    /* Nuestro constructor se convirtió en esto
     *
     * const [stateName, setStateName] = useState(initialValue);
     * 
    */ 
    const [menuTitle, setMenuTitle] = useState('Navigation Wrapper')

    return(

        <div className="nav-wrapper" style={{ backgroundImage: `url(${elPattern})` }} >
            <div className="left-side">

                <div className="nav-link-wrapper">
                    <a href="/">Home</a>
                </div>
                
                <div className="nav-link-wrapper">
                    <a href="/about">About</a>
                </div>

                <div className="nav-link-wrapper">
                    <a href="/contact">Contact Us</a>
                </div>

                <div className="nav-link-wrapper">
                    <a href="/blog">Blog</a>
                </div>

            </div>

            <div className="right-side">
                <a>
                    Alexandr Gomez
                </a>
            </div>

        </div>

    )

}

export default NavigationContainer;

