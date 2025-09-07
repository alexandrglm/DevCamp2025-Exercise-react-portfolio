// De 08-063, Authentification Component
import React, { Component } from "react";
import Login from "../auth/login";

/* Ok, los static files podemos importarlos tal cual en imports */
import loginImg from '../../../static/assets/images/auth/login.jpg'

export default class Auth extends Component {

    /* De 08-073 - Adding debugging VISUAL component, creamos el constructor */
    constructor(props){

        super(props)

        this.handleSuccesfulAuth = this.handleSuccesfulAuth.bind(this)
        this.handleUnsuccesfulAuth = this.handleUnsuccesfulAuth.bind(this)


    }
    handleSuccesfulAuth() {

        this.props.handleSuccesfulLogin()
        this.props.history.push('/')

    }
    handleUnsuccesfulAuth() {

        this.props.handleUnsuccesfulLogin()

    }


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

                    <Login />

                </div>
            </div>
        )
    }
}