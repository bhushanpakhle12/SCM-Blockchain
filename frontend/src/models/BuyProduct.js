import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/buysell.json";

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
  let quantity;

  // const buyHandler = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = await provider.getSigner();
  //   let transaction = await dappazon
  //     .connect(signer)
  //     .buy(item.id, quantity, { value: item.cost });
  //   await transaction.wait();
  // };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
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
            <Form.Control type="password" placeholder="Enter product desc.." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="addLabel">Product Price</Form.Label>
            <Form.Control type="password" placeholder="Product Price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="addLabel">Product Quantity</Form.Label>
            <Form.Control type="password" placeholder="Quantity" />
          </Form.Group>
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

export default function BuyProduct() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setModalShow(true)}>
        Buy Product
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
