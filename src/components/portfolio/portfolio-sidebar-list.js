// De 08-084
import React, { Component } from "react";


const PortfolioSidebarList = ( props ) => {

    const portfolioList = () => {


        // con MAP estamos transformando datos, de array a array-tipoJSX
        return props.data.map( portfolioItem => {

            return ( 

                <div className="portfolio-item-thumb">

                    <div className="portfolio-thumb-img">
                        <img src={portfolioItem.thumb_image_url} /> 
                    </div>

                    <h1 className="title">{portfolioItem.name}</h1>
                    <h2 className="id">ID: {portfolioItem.id}</h2>

                </div>

            )
        })
    }

    return (

        <div className="portfolio-sidebar-list-wrapper">
            { portfolioList() } 
        </div>
        
    )
}


export default PortfolioSidebarList;
