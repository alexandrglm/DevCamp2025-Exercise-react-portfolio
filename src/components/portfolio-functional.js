import React from "react"

/* La diferencia entre componente y función es,
precisamente esa:

- Componente, de React, sintaxis React, Con su obligatorio render()
    1.  import necesita { Component } siempre
    2.  class + extends + render()

- Función típica, sintaxis ES típica
    1.  import necesita 'react' solo, nunca { Component }
    2.  cosnt + arrow function + return

- Ambas usan export default, pero a su manera

*/

const PortfolioFunctional = () => {

    return (
        <div>
            <br></br>
            <h3>Los items FUNCIONALES irán aquí ...</h3>
        </div>
    )
}

export default PortfolioFunctional;