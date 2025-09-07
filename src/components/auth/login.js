// De 08-066
import React, { Component } from "react";

export default class Login extends Component{

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: ''
            
        }

        // Bind a los handlers
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    
    }

    handleChange(event){

        this.setState( {

            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {

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