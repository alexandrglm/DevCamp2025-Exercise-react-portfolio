import React, { Component } from 'react';

// Desde guia 07-031 Basic Router setup
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Desde 07-30 Elvis, para la creación del NavBar
import NavigationComponent from './navigation/navigation-container';

import PortfolioContainer from './portfolio/portfolio-container';
// OLD import PortfolioFunctional from './portfolio/portfolio-functional';

// Desde guia 07-031 Basic Router setup, importación de las pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';

// De 07-036 Catch All Routes, No Match -> 404 alike
import NoMatch from './pages/no-match';

// De 07-040 Axios GET
import axios from 'axios'

export default class App extends Component {

  render() {

    
    return (
      
      <div className='app'>
        <h1>Alexandr Gomez - React Portfolio</h1>
        <h2>Devcamp React Course 2025</h2>
        <hr />
        <p>Python version: 2.7.x</p>
        <p>Node version: 12.13.0</p>
        <hr />
        <br />

        { /* Desde guia 07-031 Basic Router setup */ }
        <Router>
          <div>          
            <NavigationComponent />

            <Switch>  
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              {/* // De 07-035 - URL values,slug, sublinks propios */}
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />

              {/* Los CATCH-ALL..:SIEMPRE AL FINAL */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </div>
    
    );

  }
}
