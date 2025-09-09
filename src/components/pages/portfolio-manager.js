// de 08-081, SecureClass Component
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

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this)

    }

    // De 08-086, hay q bind this
        // De 09-095, Hacemos Child to Paretn populating dataflow
    handleSuccessfulFormSubmission(portfolioItem) {

        this.setState({

            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)

        })


    }
    handleFormSubmissionError(error) {

        console.log('[FORM SUBMUSSION ERROR!]:', error)

    }

    handleDeleteClick(portfolioItem) {

        console.log('[AXIOS Portfolio DELETE]:', portfolioItem)

    }

    getPortfolioItems() {

        axios
        .get('https://apialexandr.devcamp.space/portfolio/portfolio_items', 
            { 
                withCredentials: true  
            }
        )
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


    render() {

        return(

            <div className="portfolio-manager-wrapper">

                <div className="left-column">

                    {/* De 08-086, sañadimos el componenten PortfolioForm*/}
                    <PortfolioForm
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />  

                </div>

                <div className="right-column">

                    <PortfolioSidebarList 
                    
                    handleDeleteClick={this.handleDeleteClick}
                    data={this.state.portfolioItems} s
                    
                    />
                </div>
            </div>
        )
    }   
}