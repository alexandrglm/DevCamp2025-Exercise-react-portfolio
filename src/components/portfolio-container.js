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

            // isLoading: false, // Lo agregamos desde guia 07 JSX y STATE, como ejemplo
            isLoading: false,     // Lo reañadimos desde 07-29 Conditionals 1, para short-circuit en true

            data: [
                { id: 1, title: "Portfolio Item 1 ...", category: "eCommerce", url: "https://google.com"},
                { id: 2, title: "Portfolio Item 2 ...", category: "Scheduling", url: "https://github.com"},
                { id: 3, title: "Portfolio Item 3 ...", category: "Enterprise", url: "https://devcamp.com"},
                { id: 4, title: "Portfolio Item 4 ...", category: "eCommerce", url: "https://yahoo.com"},
                { id: 5, title: "Item 5 ...", category: "Enterprise", url: "https://google.com"},
            ]
        };

        // De 07 STATE, veremos si es necesario por no usar () =>
        this.handleFilter = this.handleFilter.bind(this);
        this.handleToggleLoading = this.handleToggleLoading.bind(this)

        // De 07-027 Valores STATE, explicación explícita para crear binds en sintaxis antigua
        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)

    }

    // De 07 STATE a 07-28 Data Filter
    handleFilter(filter) {
        console.log("[NOTICE] NEW HandleFilter en USO")
        
        this.setState({
        data: this.state.data.filter(item => {
            return item.category === filter;
        })
        });
    }

    handleToggleLoading = () => {

        this.setState( prevState => ({

            isLoading: !prevState.isLoading
        }));
    
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

    /* 07-027 Guia manejar valores de STATE, añadimos un handlePageTitleUpdate */
    handlePageTitleUpdate() {

        this.setState({  
            
            // pageTitle: 'Title cambiado usando State' (le metemos randoms para ver cada update ademas de en console)
            pageTitle: String(Math.random().toString(15).substring(2, 12) )
        
        })

    }

    /* De 07 STATE:

        A partir de aquí, hacemos un Loading... inicial tipico

    */
    render() {

        console.log('[DEBUG render()] -> PortfolioContainer invoked')
        
        // Aunque implementamos en guias State por nuestra cuenta, desde 07-29 Conditionals 1 es explícito
        // Conditional Short-Circuit!        
        if (this.state.isLoading) {
            return <div>Loading site ...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <hr />
                <button onClick={this.handlePageTitleUpdate}> 
                    Change Title
                </button>
                <button onClick={this.handleToggleLoading}>
                    Reload render() items
                </button>
                <hr />

                {this.PortfolioItems()}
                <br />

                <button onClick={ () => this.handleFilter('eCommerce') }>
                    eCommerce
                </button>

                <button onClick={ () => this.handleFilter('Scheduling') }>
                    Scheduling
                </button>

                <button onClick={ () => this.handleFilter('Enterprise') }>
                    Enterprise
                </button>

            </div>
        );
    }
}