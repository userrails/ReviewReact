import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Blink from './Blink';
import Navigation from './Navigation';
import NavigationLinkRelatedContent from './NavigationLinkRelatedContent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Blink />
          <NavigationLinkRelatedContent />
        </div>
      </Router>
    );
  }
}

export default App;
