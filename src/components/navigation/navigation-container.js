/*
 * Desde 08-075 Refactorizamos de ClassComponent a FunctionaComponent. 
 * Aprovechamops para limpiar
*/ 
import React, { useState } from "react";

// De 08-079, axios.delete, HOC
import axios from 'axios';
import { withRouter } from 'react-router'

import { NavLink } from "react-router-dom"


// Mantenemos esto para el bg del nav
import elPattern from '../../../static/assets/pattern1.png'

const NavigationContainer = props => {

    // De o8-076, primera LOGICA del LINK CONDICIONAL a AUTH
    const dynamicLink = (route, linkText) => {

        return(

            <div className="nav-link-wrapper">

                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>

            </div>

        )

    }

    // De 08-079, axios.delete, HOC
    const handleSignOut = () => {

        axios
        .delete('https://api.devcamp.space/logout',
            { withCredentials: true} )
            .then( response => {
                if ( response.status === 200 ) {

                    props.history.push("/")
                    props.handleSuccessfulLogout();

                }
                return response.data
            })
            .catch( error => {

                console.log('[AXIOS LOGOUT] Error: ', error)

            })

    }


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
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>
                
                <div className="nav-link-wrapper">
                    <NavLink to="/about" activeClassName="nav-link-active">
                        About Us
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>

                {/* // De o8-076, segunda LOGICA para LINK CONDICIONAL a AUTH */} 
                {props.loggedInStatus === 'LOGGED_IN' ? (dynamicLink('/blog', 'Blog')) : null}

            </div>

            
            <div className="right-side">
                ALEXANDRGLM
                {/* De 08-079, axios.delete, HOC */}
                { props.loggedInStatus === 'LOGGED_IN' ? ( <a onClick={handleSignOut}>Sign Out</a> ): null }
            </div>

        </div>

    )

}


/* De 08-079, axios.delete, la implementación HOC */
export default withRouter(NavigationContainer);

