import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../lotties/login.json";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

import NavbarModel from "../models/NavbarModel";

import "../css/Login.css";

export default function Login({ setLoginUser }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const navigate = useNavigate();

  // useState for getting data and updating database
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  // Getting the input tag's name and value
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    // similar to register
    axios.post("http://localhost:5000/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user); // setting new user to hook
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
    });
    navigate("/products"); // navigate to home once login
  };

  return (
    <>
      <NavbarModel />
      <h1 className="loginTitle">Login</h1>{" "}
      <div className="loginContainer">
        <Lottie options={defaultOptions} height={450} width={450} />
        <Card body className="formCardLogin">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="formLabel">Username</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="name"
                  type="username"
                  placeholder="Enter username"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="formLabel">Password</Form.Label>
                <Form.Control
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Row>
            <Button onClick={login} className="loginBtn" variant="outline-info">
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}
