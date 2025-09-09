// de 08-081, SecureClass Component
import React, { Component } from "react";
import axios from 'axios'

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

// Esto lo arrreglaré después según scope
const miApi = 'https://apialexandr.devcamp.space'

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

        // console.log('[AXIOS Portfolio DELETE]:', portfolioItem)
        axios
            .delete( `${miApi}/portfolio/portfolio_items/${portfolioItem.id}`, { withCredentials: true } 

            )
            .then( response => {

                this.setState({


                    /*
                        Por qué usamos .filter() en vez de map() ?????????

                        - Filter itera por cada elemento del array
                        - El callback que hagamos se ejecuta POR CADA ELEMENTO
                        - Crea UN NUEVO ARRAY con la data y/o elimina algun item EN UN NUEVO ARRAY
                        - Es decir, mantiene INMUTABLE la data
                    
                    */
                    portfolioItems: this.state.portfolioItems.filter( item => {

                        console.log('[AXIOS DELETE]: ', response)
                        return item.id !== portfolioItem.id;

                    })

                })

                return response.data

            })
            .catch( error =>{ 

                console.log('[AXIOS DELETE ERROR] handleClickDelete ERROR: ', error)
            })
    }

    getPortfolioItems() {

        axios
        .get( `${miApi}/portfolio/portfolio_items?order_by=created_at&direction=desc`, 
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