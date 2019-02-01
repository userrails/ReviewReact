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
                <Button variant="warning">Home Section</Button>
              </Col>
            </Row>
          </Container>
        </div>
      );
   }
}
export default Home;