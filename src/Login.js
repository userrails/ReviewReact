import React, { Component } from 'react';
import {Row, Col, Form, Button, Card} from 'react-bootstrap';
import { fakeAuth } from './services/fakeAuth';

class Login extends Component {
   render() {
      return (
        <div>
          <Row>
            <Col xs={12}>
              <Card>
                <Card.Header as="h5">Fill out the form</Card.Header>
                <Card.Body>
                  <Card.Title>Register to the application</Card.Title>
                  <Card.Text>
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="success" type="submit" onClick={this.authenticate}>
                        Submit
                      </Button>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      );
   }
}
export default Login;