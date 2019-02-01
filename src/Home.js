import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Home extends Component {
   render() {
      return (
        <div>
          <Container>
            <Row>
              <Col xs={12}>
                <h2>Welcome to my home page</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button variant="warning">Wanna Subscribe for newsletter?</Button>
              </Col>
            </Row>
          </Container>
        </div>
      );
   }
}
export default Home;