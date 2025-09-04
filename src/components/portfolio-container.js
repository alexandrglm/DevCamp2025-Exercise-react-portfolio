import React,{ Component } from "react";

// Nuestro propios imports, empieza con el del primer PROPS
import PortfolioItem from "./portfolio-item";

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


    PortfolioItems() {

        return this.state.data.map( item => {
            
            return (
                <PortfolioItem

                    key={item.title}
                    title={item.title}
                    url={item.url}
                />
            );
        });

    }

    render() {
        return (
            
            <div>
                <h2>{this.state.pageTitle}</h2>
                {this.PortfolioItems()}
            </div>
        );
    }
}