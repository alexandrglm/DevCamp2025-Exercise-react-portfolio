import React, { Component } from 'react';

// Desde guia 07-031 Basic Router setup
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Desde 07-30 Elvis, para la creación del NavBar
import NavigationContainer from './navigation/navigation-container';

// OLD import PortfolioContainer from './portfolio/portfolio-container';
// OLD import PortfolioFunctional from './portfolio/portfolio-functional';

// Desde guia 07-031 Basic Router setup, importación de las pages
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import Auth from './pages/auth';

// De 07-036 Catch All Routes, No Match -> 404 alike
import NoMatch from './pages/no-match';

// De 07-040 Axios GET
import axios from 'axios'

export default class App extends Component {

  // De 08-072
  handleSuccesfulLogin() {

    this.setState({
      loggedInStatus: 'LOGGED_IN'
    })

  }
  handleUnsuccesfulLogin(){
    
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN'
    })
  
  }


  render() {

    
    return (
      
      <div className='container'>
        { /* Desde guia 07-031 Basic Router setup */ }
        <Router>
          <div>          
            <NavigationContainer />

            {/* De 08-073 - Adding debugging VISUAL component*/}
            <h2>{this.state.loggedInStatus}</h2>

            <Switch>  
              <Route exact path="/" component={Home} />


              {/* 
              Pasamos del compopnente basico prop, al RENDER PROPS
              
                - Patron RENDER PROPS ... pasa FUNCIONES a COMPONENTES
                - ...props, el spread preserva toda la funcionalidad de Router
               
               
               */}
              <Route path="/auth"
              render={ props =>  (

                <Auth
                {...props} 
                handleSuccesfulLogin={this.handleSuccesfulLogin} 
                handleUnsuccesfulLogin={this.handleUnsuccesfulLogin} 
                />
              )}
              />
              
              
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
