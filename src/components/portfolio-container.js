import React,{ Component } from "react";

export default class PortfolioContainer extends Component {
    
    // Primer CONSTRUCTOR!
    constructor(props) {

        super(props);

        console.log("[NOTICE] Estamos usando nuestor primer CONSTURCTOR" )
        console.log("Muestra de cada super(props):", this.props)

        
        this.state = {

            pageTitle: "Welcome to my Portfolio!",

            data: [
                { title: "Portfolio Item 1 ..."},
                { title: "Portfolio Item 2 ..."},
                { title: "Portfolio Item 3 ..."},
                { title: "Portfolio Item 4 ..."}
            ]
        };
    }


    render() {
        return (
            <div>
                <h2>Los items portfolio CLASS, del nuevo componente, irán aquí:</h2>
            </div>
        );
    }
}