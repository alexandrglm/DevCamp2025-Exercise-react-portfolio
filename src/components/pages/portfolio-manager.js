// de 08-081, SecureClass Component

/*
Portfolio-Manager es una PAGE, por lo tanto
debemos mover el componente directamente a pages,
y rhacer los imports posibles.
*/
import React, { Component } from "react";
import axios from 'axios'

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";


export default class PortfolioManager extends Component {


    //de 08-083, cosntructor para portfolio-manager con state inicial
    constructor(){

        super();

        this.state = {

            portfolioItems: []
        }

        
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this)
        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)

    }
    getPortfolioItems() {

        axios
        .get('https://apialexandr.devcamp.space/portfolio/portfolio_items', { withCredential: true  } )
        .then( response => {

            console.log('[AXIOS GET PORTFOLIO-ITEMS] Response: ', response )
            
            this.setState( {


                // !!! con SPREAD obtenemos un array LIMPIO, sin spread obtenemos arrays dentro de arrays por objteo
                portfolioItems: [...response.data.portfolio_items]
            })

                })
        .catch( error => {

            console.log('AXIOS ERROR] Error: ', error)

        })
    }

    componentDidMount() {

        this.getPortfolioItems()
    }


    // De 08-086, hay q bind this
    handleSuccessfulFormSubmission( portfolioItem ){

        console.log('Estoy un poco hasta la polla')

    }
    handleFormSubmissionError(error) {

        console.log('[FORM SUBMUSSION ERROR!]:', error)

    }





    render() {

        return(

            <div className="portfolio-manager-wrapper">

                <div className="left-column">

                    {/* De 08-086, sañadimos el componenten PortfolioForm*/}
                    <PortfolioForm 
                    handleFormSubmissionError={this.handleFormSubmissionError}
                    handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                    />   

                </div>

                <div className="right-column">

                {/* De 08-084, integramos el sidebarlist como propio componete*/}
                <PortfolioSidebarList data={this.state.portfolioItems} />
                
                </div>
            </div>
        )
    }   
}