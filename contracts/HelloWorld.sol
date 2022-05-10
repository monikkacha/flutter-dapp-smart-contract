// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public yourName = "Some random name here";

    constructor() public {
        yourName = "Unknown";
    }

    function setName(string memory _name) public {
        yourName = _name;
    }
}
