import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/addproduct.json";

import Metamask from "./Metamask";
import { useState } from "react";
import DatePicker from "react-date-picker";
import "../css/AddProd.css";
import Form from "react-bootstrap/Form";

function MyVerticallyCenteredModal(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [value, onChange] = useState(new Date());
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Metamask />
        <Lottie options={defaultOptions} height={200} width={200} />{" "}
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="addLabel">Product Name</Form.Label>
            <Form.Control type="name" placeholder="Enter product name.." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="addLabel">Product Description</Form.Label>
            <Form.Control type="text" placeholder="Enter product desc.." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="addLabel">Product Price</Form.Label>
            <Form.Control type="text" placeholder="Product Price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="addLabel">Product Quantity</Form.Label>
            <Form.Control type="text" placeholder="Quantity" />
          </Form.Group>
          <div className="dateClass">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="addLabel">Date Manufactured</Form.Label>
              <DatePicker
                className="addLabelDate"
                onChange={onChange}
                value={value}
              />
              <Form.Label className="addLabel">Date of Expiry</Form.Label>
              <DatePicker
                className="addLabelDate"
                onChange={onChange}
                value={value}
              />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function AddProduct() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Product
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
