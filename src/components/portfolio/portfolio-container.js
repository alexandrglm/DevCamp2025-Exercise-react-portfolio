import React,{ Component } from "react";

// De 07-041
import axios from "axios";

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


            // De 07-042, vaciamos el array hardcoded para trabajar con la API
            data: []
        };

        // De 07 STATE, veremos si es necesario por no usar () =>
        this.handleFilter = this.handleFilter.bind(this);
        this.handleToggleLoading = this.handleToggleLoading.bind(this)

        // De 07-027 Valores STATE, explicación explícita para crear binds en sintaxis antigua
        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)


        // De 07-041 (movimos axios de app.js al componente)
        this.getPortfolioItems = this.getPortfolioItems.bind(this)
    }

    // De 07-042
    componentDidMount() {

        this.getPortfolioItems()

    }

    // 07-042 DEPRECATED
    // // De 07 STATE a 07-28 Data Filter
    handleFilter(filter) {
        console.log("[NOTICE] NEW HandleFilter en USO")
        
        this.setState({
            data: this.state.data.filter( item => {

                return item.category === filter;
            
            })
        });
    }

    handleToggleLoading = () => {

        this.setState( prevState => ({

            isLoading: !prevState.isLoading
        }));
    
    }

    /* 07-027 Guia manejar valores de STATE, añadimos un handlePageTitleUpdate */
    handlePageTitleUpdate() {

        this.setState({  
            
            // pageTitle: 'Title cambiado usando State' (le metemos randoms para ver cada update ademas de en console)
            pageTitle: String(Math.random().toString(15).substring(2, 12) )
        
        })

    }


    // De 07-041, movemos axios api get all de app.js aquí
    getPortfolioItems() {

        axios.get('https://apialexandr.devcamp.space/portfolio/portfolio_items')
        .then( response =>{

            console.log('[AXIOS] GET ALL data response: ', response)

            // AÑADIMOS setState para actualizar la data/el render
            this.setState( {

                data:   response.data.portfolio_items

            })

        })
        .catch( error => {

            console.log('[ERROR AXIOS] GET ALL error:', error)

        })

    }


    PortfolioItems() {

        return this.state.data.map( item => {
            
            return (
                <PortfolioItem

                    key={item.id}
                    title={item.name}
                    url={item.url}
                    slug={item.id}
                />
            );
        });

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

        // En 07-042 es DEPRECATED, ya que estamos implementando las API request en didComponentMount
        // // De 07-041, movimos el callback de AXIOS GET ALL, aquí
        // this.getPortfolioItems();

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

                
                <button onClick={ () => this.handleFilter('Pigments') }>
                    Pigments
                </button>

                <button onClick={ () => this.handleFilter('Hanko') }>
                    Hanko
                </button>

                <button onClick={ () => this.handleFilter('Sentai') }>
                    Sentai
                </button>
                    
            </div>
        );
    }
}