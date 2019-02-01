import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Blink from './Blink';
import NavigationLinkRelatedContent from './NavigationLinkRelatedContent';
import Header from './Header.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Blink />
          <NavigationLinkRelatedContent />
        </div>
      </Router>
    );
  }
}

export default App;
