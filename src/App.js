import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavigationLinkRelatedContent from './NavigationLinkRelatedContent';
import Header from './Header.jsx';
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          
          <Container>
            <NavigationLinkRelatedContent />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
