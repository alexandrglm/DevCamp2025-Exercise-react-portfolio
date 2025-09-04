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


    /* Refactorizar PortfolioContainer para NO meter lógica en render()

        - Usando map() -> Se itera sobre datos, retorna nuevo array SIN modificar, mejor que loops

    */
    PortfolioItems() {

        return this.state.data.map( (item) => {
            return(

                <div key={item.title}>
                    {item.title}
                </div>
            );
        });
    }
    /*
    También podemos usar el mapeo dentro de los propios callcbacks,
    por ejemplo para Ordered Lists,
        PortfolioItems() {
            return (
            <div>
                <ol>
                    {this.state.data.map( (item) => (
                        <li key={item.title}>{item.title}</li>
                    ))}
                </ol>
            </div>
        )};
    */

    render() {
        return (
            
            <div>
                <h2>{this.state.pageTitle}</h2>
                {this.PortfolioItems()}
            </div>
        );
    }
}