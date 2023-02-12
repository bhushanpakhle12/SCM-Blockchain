import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationDataLoading from "../lotties/loadingProducts.json";
import animationDataHealth from "../lotties/healthcare.json";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import AddProduct from "../models/AddProduct.js";
import BuyProduct from "../models/BuyProduct.js";

import "../css/Product.css";

export default function Products({ setLoginUser }) {
  const [myData, setMyData] = useState([]);

  const navigate = useNavigate();

  const userData = () => {
    axios.get("http://localhost:5000/products").then((res) => {
      const data = res.data;
      setMyData(data);
    });
  };

  useEffect(() => {
    userData();
  }, []);

  console.log(myData);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataHealth,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationDataLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, message } = e.target.elements;
    let conFom = {
      name: name.value,
      message: message.value,
    };
    console.log(conFom);

    axios
      .post("http://localhost:5000/contact", conFom) // sending post req and data of user to diff port host at backend (as react is on 3000)
      .then((res) => {
        alert(res.data.message); // res.data is an obj
      });
    navigate("/products"); // after post req redirect to login page
  };

  return (
    <>
      <div className="lottie">
        {" "}
        <Lottie options={defaultOptions} height={450} width={700} />{" "}
        <Lottie options={defaultOptions1} height={450} width={450} />
      </div>
      <div className="prodButton">
        <AddProduct />
        <BuyProduct />
      </div>
      <div className="container mt-5">
        <h2 className="mb-3 contactHead">Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            Send
          </button>
        </form>
      </div>
      <Button
        onClick={() => setLoginUser({})}
        variant="outline-info"
        className="logout"
      >
        Logout
      </Button>
    </>
  );
}
