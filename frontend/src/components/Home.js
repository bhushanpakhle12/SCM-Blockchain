import React from "react";
import "../css/Home.css";
import Lottie from "react-lottie";
import animationData from "../lotties/home.json";
import NavbarModel from "../models/NavbarModel";

export default function Home() {
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
      <NavbarModel />
      <div className="homeContainer">
        <Lottie options={defaultOptions} height={400} width={400} />

        <div className="bodyContainer">
          <h1 className="h1Title">Kahi Pahije Ka ..?</h1>
          <div className="innerContainer">
            <div className="bodyText">
              <h3 className="h1Body">Bhushan Pakhle</h3>
              <h3 className="h1Body">Amey Bagwe</h3>
            </div>
            <div className="bodyText">
              <h3 className="h1Body">Wesley Lewis</h3>
              <h3 className="h1Body">Manasvi Patil</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}