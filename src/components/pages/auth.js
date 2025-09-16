// De 08-063, Authentification Component
import React, { Component } from "react";
import Login from "../auth/login";

/* Ok, los static files podemos importarlos tal cual en imports */
import loginImg from '../../../static/assets/images/auth/login.jpg'

export default class Auth extends Component {
    
    constructor(props) {
        super(props);

        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    }

    handleSuccessfulLogin() {
    
        this.props.handleSuccessfulLogin()
        this.props.history.push("/");
    
    }

    handleUnsuccessfulLogin() {
    
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
                    handleSuccessfulLogin={this.handleSuccessfulLogin} 
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin} 
                    />

                </div>
            </div>
        )
    }
}