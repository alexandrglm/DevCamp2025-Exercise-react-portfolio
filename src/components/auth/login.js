// De 08-066
import React, { Component } from "react";

// 08-069
import axios from "axios";

export default class Login extends Component{

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: '',
            errorText: ''
        }

        // Bind a los handlers
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    
    }

    handleChange(event){

        this.setState( {

            [event.target.name]: event.target.value,
            errorText: ''
        })
    }

    handleSubmit(event) {

        axios
        .post(
            'https://api.devcamp.space/sessions',
            {
                client: {
                    email:  this.state.email,
                    password: this.state.password
                }
            }, 

            { withCredentials: true }
        )
        .then( response => {

            //Elvis: response.data.status === 'created' ? console.log(['axios debug, WELCOME!']) : this.setState( { errorText: 'WRONG PASS'})
            // De 08-070, implementamos a nivel de api el errorHandling
            if ( response.data.status === 'created' ) {

                console.log('[AXIOS SESSIONS DEBUG] WELCOME!')
                /* De 08-073 - linkamos las handle...Login() a las responses específicas */
                this.props.handleSuccessfulAuth()
            
            } else {

                this.setState({
                    errorText: 'WRONG EMAIL or PASSWORD!'
                })
                this.props.handleUnsuccessfulAuth();
            }

        })
        .catch( error => {
            console.log('[DEBUG GUIA 08-069]:', error)
            
            this.setState( {
                errorText: 'An erroro ocurred! Check API'
            });
            
            this.props.handleUnsuccesfulAuth();
        })

        // De 08-068, enforce form data submit
        event.preventDefault()

        console.log('[DEBUG Forms] Handle submit: ', event)
        // PRueba de concepto para acceder a la data de manera segura
        console.log('[TEST preventDefault()]', this.state.email) // La pass tmb se podría acceder, pero jamas usando event.target.X.value

    }

    render() {

        return(

            <div>

                <h1>Login to access your dashboard</h1>

                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit}>

                    <input 
                    type="email" 
                    name="email" 
                    placeholder="e-mail...."
                    value={this.state.email}
                    onChange={this.handleChange}
                     />
                    <input 
                    type="password" 
                    name="password"
                    placeholder="Password ..." 
                    value={this.state.password}
                    onChange={this.handleChange}
                    
                    />

                    <button type="submit">Login</button>
                </form>
            </div>


        )

    }

}