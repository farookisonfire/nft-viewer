import React from 'react';

const Header = ({ status, contractAddress, account }) => {
  return (
    <div>
      <div>{`contract: ${contractAddress}`}</div>
      <div>{`account: ${account}`}</div>
      <div>{status}</div>
    </div>
  )
}

export default Header;
