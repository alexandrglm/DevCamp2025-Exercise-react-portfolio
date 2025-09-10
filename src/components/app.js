import React, { Component } from 'react';

// Desde guia 07-031 Basic Router setup
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// De 08-074 Cookies checking
import axios from 'axios';

// De 09-107
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

// Desde 07-30 Elvis, para la creación del NavBar
import NavigationContainer from './navigation/navigation-container';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
// De 08-081, SecureClass Component
import PortfolioManager from './pages/portfolio-manager';
import PortfolioDetail from './portfolio/portfolio-detail';
import Auth from './pages/auth';

// De 07-036 Catch All Routes, No Match -> 404 alike
import NoMatch from './pages/no-match';

// De 09-107 IMPORTATISIMO
library.add(faTrash, faSignOutAlt)


export default class App extends Component {

  /* De 08-073 - Adding debugging VISUAL component, creamos el constructor */
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }


  // De 08-072
  handleSuccessfulLogin() {

    this.setState({
      loggedInStatus: 'LOGGED_IN'
    })

  }
  handleUnsuccessfulLogin(){
    
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN'
    })
  
  }

  //De 08-078 LOGOUT
  handleSuccessfulLogout(){

    this.setState( {
      loggedInStatus: 'NOT_LOGGED_IN'
    } )
  }

  // De 08-074: Cookies-Logged In Status
  checkLoginStatus() {
    
    return axios
      
      .get("https://api.devcamp.space/logged_in", {
      
         withCredentials: true,
      
       })
      
      .then((response) => {
      
        console.log("[AXIOS COOKIES CHECK] logged_in response:", response);

        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

      
        if (loggedIn && loggedInStatus === "LOGGED_IN") {
      
          return loggedIn;
      
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
      
          this.setState({
      
            loggedInStatus: "LOGGED_IN",
      
          });
      
      
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
      
          this.setState({
      
            loggedInStatus: "NOT_LOGGED_IN",
      
          });
      
      
        }
      })
      .catch((error) => {
        console.log("[AXIOS COOKIES ERROR] Error:", error);
      });
  }

  componentDidMount(){

    this.checkLoginStatus()
  }


  //De 08-077 ROUTE GUARDS
  authorisedPages() {
    
    return [
      
      <Route
        key="portfolio-manager"
        path="/portfolio-manager"
        component={PortfolioManager}
      />
    
    ];
  }

  render() {

    
    return (
      
      <div className='container'>
        { /* Desde guia 07-031 Basic Router setup */ }
        <Router>
          <div>          

            { /* De o8-076, tercera LOGICA del LINK CONDICIONAL a AUTH, pasando props al callback */}
            <NavigationContainer  
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.state.handleSuccessfulLogout}
            />

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
                handleSuccessfulLogin={this.handleSuccessfulLogin} 
                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin} 
                />
              )}
              />
              
              
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog}  />
              
              {/*   //De 08-077 ROUTE GUARDS */}
              { this.state.loggedInStatus === 'LOGGED_IN' ? ( this.authorisedPages() ) : null }
              
              
              
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
