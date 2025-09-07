// De 08-063, Authentification Component
import React, { Component } from "react";
import Login from "../auth/login";

/* Ok, los static files podemos importarlos tal cual en imports */
import loginImg from '../../../static/assets/images/auth/login.jpg'

export default class Auth extends Component {
    
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
    
        this.props.handleSuccessfulLogin();
        this.props.history.push("/");
    
    }

    handleUnsuccessfulAuth() {
    
        this.props.handleUnsuccessfulLogin();
    
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

                    <Login
                    handleSuccessfulAuth={this.handleSuccessfulAuth} 
                    handleUnsuccesfulAuth={this.handleUnsuccesfulAuth} 
                    />

                </div>
            </div>
        )
    }
}