// De 07-035 - URL values,slug
import React from "react";

const PortfolioDetail = (props) => {

    return(

        <div>
            <h2>Portfolio Details for {props.match.params.slug} </h2>
        </div>

    )
}

export default PortfolioDetail;