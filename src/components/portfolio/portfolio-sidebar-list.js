// De 08-084
import React, { Component } from "react";


const PortfolioSidebarList = ( props ) => {

    const portfolioList = props.data.map( portfolioItem => {

        /*
        Con MAP estamos transformando datos, de array a array-tipoJSX
        
        (De 08-090) PEEEEEEEEEEERO, si ponemos el .map() en el return, 
        cada child de la lista NO tendrá key unicas, 
        Funcionará, pero con warnings. 
        
        NO !!--> return props.data.map( portfolioItem => {
        SI!!! -> Pasado como argumento
        */

        return ( 

            <div key={portfolioItem.id} className="portfolio-item-thumb">

                <div className="portfolio-thumb-img">
                    <img src={portfolioItem.thumb_image_url} /> 
                </div>

                <div className="text-content">
                    
                    <div className="title">{portfolioItem.name}</div>
                    <div className="id">ID: {portfolioItem.id}</div> 
                    <div className="description">{portfolioItem.description}</div>

                    <a onClick={ () => props.handleDeleteClick(  portfolioItem ) }>
                        Delete This
                    </a>
                
                </div>


            </div>

        )
    })


    return (

        <div className="portfolio-sidebar-list-wrapper">
            { portfolioList } 
        </div>
        
    )
}


export default PortfolioSidebarList;
