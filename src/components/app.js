import React, { Component } from 'react';

// Desde guia 07-031 Basic Router setup
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Desde 07-30 Elvis, para la creación del NavBar
import NavigationComponent from './navigation/navigation-container';

import PortfolioContainer from './portfolio-container';
import PortfolioFunctional from './portfolio-functional';

// Desde guia 07-031 Basic Router setup, importación de las pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';


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
              <Route exatct path="/about-me" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>
        
        <br />
        <PortfolioContainer />
        <PortfolioFunctional />
      </div>
    
    );

  }
}
