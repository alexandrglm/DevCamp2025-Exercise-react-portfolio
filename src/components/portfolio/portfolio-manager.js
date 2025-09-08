// de 08-081, SecureClass Component
import React, { Component } from "react";
import axios from 'axios'


import PortfolioSidebarList from "./portfolio-sidebar-list";


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

                {/* De 08-084, integramos el sidebarlist como propio componete*/}
                <PortfolioSidebarList data={this.state.portfolioItems} />
                
                </div>
            </div>
        )
    }   
}