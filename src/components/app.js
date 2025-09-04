import React, { Component } from 'react';
import PortfolioContainer from './portfolio-container';
import PortfolioFunctional from './portfolio-functional';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Alexandr Gomez - React Portfolio</h1>
        <h2>Devcamp React Course 2025</h2><br></br>
        <p>Python version: 2.7.x</p>
        <p>Node version: 12.13.0</p>
        <br></br>
        <PortfolioContainer />
        <PortfolioFunctional />
      </div>
    );

  }
}
