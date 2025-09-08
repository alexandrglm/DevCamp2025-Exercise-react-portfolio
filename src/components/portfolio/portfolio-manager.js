// de 08-081, SecureClass Component
import React, { Component } from "react";
import axios from 'axios'

export default class PortfolioManager extends Component {


    //de 08-083, cosntructor para portfolio-manager con state inicial
    constructor(){

        super();

        this.state = {

            portfolioItems: []
        }

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


    render() {

        return(

            <div className="portfolio-manager-wrapper">

                <div className="left-column">
                    <h1>Portfolio Form ...</h1>
                </div>

                <div className="right-column">
                    <h1>Portfolio Sidebar...</h1>
                </div>
            </div>
        )
    }   
}