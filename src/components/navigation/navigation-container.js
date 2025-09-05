// De 07-30 Elvis

import React, { Component } from "react";

export default class NavigationComponent extends Component {

    constructor() {
        super()

    }

    render() {

        return (

            <div>
                <button> Home</button>
                <button> About</button>
                <button> Contact</button>
                <button> Blog</button>
                
                {/* Aquí comienzan las ternary para discernir qué mostrar */ }
                { true ? <button> Add blog</button> : null }
            </div>

        )


    }

}