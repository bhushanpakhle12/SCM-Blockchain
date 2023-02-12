import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/login.json";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import "../css/Login.css";

export default function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="loginContainer">
        {" "}
        <Lottie options={defaultOptions} height={400} width={400} />
        <Card body className="formCard">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="formLabel">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="formLabel">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>
            {/* <Row className="mb-3">

<Form.Group as={Col} controlId="formGridState">
<Form.Label className="formLabel">State</Form.Label>
<Form.Select defaultValue="Choose...">
<option>Choose...</option>
<option>...</option>
</Form.Select>
</Form.Group>
</Row> */}
            <button className="button" type="submit">
              Submit
            </button>
          </Form>
        </Card>
      </div>
    </>
  );
}
