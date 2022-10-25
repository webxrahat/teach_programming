import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LogIn = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Form>
          <Col lg={12}>
            <Row className="justify-content-lg-center">
              <Col lg="6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Col lg={12}>
            <Row className="justify-content-lg-center">
              <Col lg="6">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>

          <Row className="justify-content-lg-center mt-3 mb-3">
            <Col lg="auto">
              <Button variant="primary" type="submit">
                Log in
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-lg-center">
            <Col lg="auto">
              <Button variant="outline-danger" type="submit">
                Login with Google
              </Button>
            </Col>
          </Row>
          <Row className="justify-content-lg-center mt-3">
            <Col lg="auto">
              <Button variant="outline-dark" type="submit">
                Login with GitHub
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
};

export default LogIn;
