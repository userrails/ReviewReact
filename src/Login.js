import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Login extends Component {
   render() {
      return (
        <div>
          <Row>
            <Col xs={12}>
              <Button variant="danger">Login Section</Button>
            </Col>
          </Row>
        </div>
      );
   }
}
export default Login;