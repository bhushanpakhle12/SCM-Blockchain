import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/login.json";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import NavbarModel from "../models/NavbarModel";

import "../css/Register.css";

export default function Login() {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // useState for getting data and updating database
  const [user, setUser] = useState({
    name: "",
    password: "",
    reEnterPassword: "",
  });

  // Getting the input tag's name and value
  const handleChange = (e) => {
    const { name, value } = e.target; // e.target gives the tag elements (input)
    setUser({
      // spread and assigning new values onChange
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, password, reEnterPassword } = user; // destructure user state
    if (name && password && password === reEnterPassword) {
      axios
        .post("http://localhost:5000/register", user) // sending post req and data of user to diff port host at backend (as react is on 3000)
        .then((res) => {
          alert(res.data.message); // res.data is an obj
        });
      navigate("/login"); // after post req redirect to login page
    } else {
      alert("Invalid input");
    }
  };

  return (
    <>
      {console.log("USER", user)}
      <NavbarModel />
      <h1 className="loginTitle">Register</h1>{" "}
      <div className="loginContainer">
        <Lottie options={defaultOptions} height={450} width={450} />
        <Card body className="formCard">
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
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="formLabel">Confirm Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="reEnterPassword"
                  type="cpassword"
                  placeholder="Password"
                />
              </Form.Group>
            </Row>
            <Button
              onClick={register}
              variant="outline-info"
              className="buttonReg"
              type="submit"
            >
              Register
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}
