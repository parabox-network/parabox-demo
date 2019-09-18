pragma solidity ^0.4.24;

contract TransferNativeCoin {
    event TransferNativeCoin(address indexed from, address indexed to, uint256 value);

    function transferNativeCoin(address _to) external payable {
        require(msg.value > 0, "msg.value should be greater than 0");
        _to.transfer(msg.value);
        emit TransferNativeCoin(msg.sender, _to, msg.value);
    }
}