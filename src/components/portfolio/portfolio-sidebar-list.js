// De 08-084
import React, { Component } from "react";


const PortfolioSidebarList = ( props ) => {

    const portfolioList = () => {


        // con MAP estamos transformando datos, de array a array-tipoJSX
        return props.data.map( portfolioItem => {

            return ( 

                <div>

                    <img src={portfolioItem.thumb_image_url} /> 
                    <h1>{portfolioItem.name}</h1>
                    <h2>{portfolioItem.id}</h2>

                </div>

            )
        })
    }

    return (

        <div>{ portfolioList() } </div>
        
    )
}


export default PortfolioSidebarList;
