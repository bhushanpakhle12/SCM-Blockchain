import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { ethers } from "ethers";

export default function Metamask() {
  const [state, setState] = useState("");
  const [userAccount, setUserAccount] = useState()
  const connectToMetamask = async () => {
    
      
        
      const accounts = window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setUserAccount(accounts[0])

      console.log(accounts);
    
    setState({ selectedAddress: accounts[0] });
  };

  function renderMetamask() {
    if (!state.selectedAddress) {
      return (
        <Button onClick={() => connectToMetamask()}>Connect to Metamask</Button>
      );
    } else {
      return <p>Welcome {state.selectedAddress}</p>;
    }
  }
  return <div>{renderMetamask()}</div>;
}
