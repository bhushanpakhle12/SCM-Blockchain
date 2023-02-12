// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract SCM {
  address public owner;
  uint256 public identifier = 1;

  struct Product {
    address manufacturer;
    string productName;
    uint256 identifier;
    uint256 dateOfManufacturing;
    uint256 dateOfExpiry;
    string manufacturingNo;
    uint256 batchNo;
    uint256 costOfProduct;
    uint256 quantity;
    State stateOfProduct; 
  }

  struct Order {
    uint256 time;
    Product product;
  } 

  struct State {
    address productOwner;
    string productLocation;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  event UploadProduct(uint256 identifier, uint256 quantity, string productName);
  event BoughtProduct(string productName, uint256 quantity, address buyer);

  mapping(uint256 => Product) public products;
  mapping(address => uint256 ) public orderCount;
  mapping(address => mapping(uint256 => Order)) public orders;

  constructor() {
    owner = msg.sender;
  }

  function uploadProduct(
    string memory _productName,
    uint256 _dateOfManufacturing,
    uint256 _dateOfExpiry,
    string memory _manufacturingNo,
    uint256 _batchNo,
    uint256 _costOfProduct,
    uint256 _quantity
  ) public onlyOwner returns (bool){
    
    Product memory newProduct = Product(
      msg.sender,
      _productName,
      identifier,
      _dateOfManufacturing,
      _dateOfExpiry,
      _manufacturingNo,
      _batchNo,
      _costOfProduct,
      _quantity,
      State(msg.sender,  "")
    );

    incrementId();

    products[identifier - 1] = newProduct;

    emit UploadProduct(identifier - 1, _quantity, _productName);

    return true;
  }

  function buyProduct(uint256 _identifier, uint256 _quantity) public payable returns(bool){
    require(products[_identifier].costOfProduct <= _quantity * msg.value);
    require(products[_identifier].quantity > 0);

    Order memory order = Order(block.timestamp, products[_identifier]);

    orderCount[msg.sender]++;
    orders[msg.sender][orderCount[msg.sender]] = order;

    products[_identifier].quantity = products[_identifier].quantity - _quantity;

    emit BoughtProduct(products[_identifier].productName, _quantity, msg.sender);
    
    return true;
  }

  function updateLocation(uint256 _identifier, string memory newLocation) public {
    require(products[_identifier].manufacturer == msg.sender);
    products[_identifier].stateOfProduct.productLocation = newLocation;
  }

  function incrementId() private {
    identifier++;
  }

  function withdraw() public onlyOwner {
    (bool success, ) = owner.call{value: address(this).balance}("");
    require(success);
  }

  function getProductQuantity(uint256 _identifier) public view returns(uint256) {
    return products[_identifier].quantity;
  }

}