// De 08-063, Authentification Component
import React, { Component } from "react";

/* Ok, los static files podemos importarlos tal cual en imports */
import loginImg from '../../../static/assets/images/auth/login.jpg'

export default class Auth extends Component {


    render() {
        
        return (
        
            <div className="auth-page-wrapper">
                
                <div 
                className="left-column" 
                style={{ 
                    backgroundImage: `url(${loginImg})`,
                    height: "200px"
                 }}
                
                >
                </div>
                
                <div className="right-column">

                    <h1>Login Componenet</h1>

                </div>
            </div>
        )
    }
}