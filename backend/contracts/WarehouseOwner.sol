// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "./SCM.sol";

contract WarehouseOwner is SCM{
  mapping(address => string) public managerDetails;

  function checkProduct(uint256 _identifier, string memory _productName, uint256 _dateOfManufacturing, uint256 _dateOfExpiry, string memory _manufacturingNo, uint256 _batchNo, uint256 _costOfProduct, uint256 _quantity, string memory _managerInfo) public returns (bool){
    require(products[_identifier].identifier == _identifier); 
    if(_dateOfManufacturing != products[_identifier].dateOfManufacturing) {
      return false;
    }
    if(keccak256(abi.encodePacked(_productName)) != keccak256(abi.encodePacked(products[_identifier].productName))) {
      return false;
    }
    if(_dateOfExpiry != products[_identifier].dateOfExpiry) {
      return false;
    }
    if(keccak256(abi.encodePacked(_manufacturingNo)) != keccak256(abi.encodePacked(products[_identifier].manufacturingNo))) {
      return false;
    }
    if(_batchNo != products[_identifier].batchNo) {
        return false;
    }
    if(_costOfProduct != products[_identifier].costOfProduct) {
      return false;
    }
    if(_quantity != products[_identifier].quantity) {
      return false;
    }

    managerDetails[msg.sender] = _managerInfo;
    
    return true;
  }

  function dispatchProduct(uint256 _identifier, string memory _details) public {
    WarehouseUpdate memory warehouseUpdate = WarehouseUpdate(msg.sender, block.timestamp, _details);
    history[_identifier] = warehouseUpdate;
  }
}