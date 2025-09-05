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

            isLoading: false, // Lo agregamos desde guia 07 JSX y STATE, como ejemplo

            data: [
                { id: 1, title: "Portfolio Item 1 ...", url: "https://google.com"},
                { id: 2, title: "Portfolio Item 2 ...", url: "https://github.com"},
                { id: 3, title: "Portfolio Item 3 ...", url: "https://devcamp.com"},
                { id: 4, title: "Portfolio Item 4 ...", url: "https://yahoo.com"},
                { id: 5, title: "Item 5 ...", url: "https://google.com"},
            ]
        };

        // De 07 STATE, veremos si es necesario por no usar () =>
        this.handleFilter = this.handleFilter.bind(this);
        this.handleToggleLoading = this.handleToggleLoading.bind(this)

        // De 07-027 Valores STATE, explicación explícita para crear binds en sintaxis antigua
        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)

    }

    // De 07 STATE, veremos si es necesario por no usar () =>
    handleFilter() {
        console.log("[NOTICE] HandleFiltering en USO")
        
        this.setState({

            // Vamos a filtrar el item 5 (que es, precisamente, el item del elvis)
            // He tenid problemas para implementar un elvis que restaure el title
            data: this.state.data.filter( item =>  {

                return item.title !== 'Item 5 ...'

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
        
        if (this.state.isLoading) {
            <div>Loading site ...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <hr />
                <button onClick={this.handlePageTitleUpdate}> 
                    Change Title
                </button>
                <hr />

                {this.PortfolioItems()}
                <br />
                <button onClick={this.handleFilter}>
                    Filter Items
                </button>

                <button onClick={this.handleToggleLoading}>
                    Reload render() items
                </button>

            </div>
        );
    }
}