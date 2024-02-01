import React from 'react';
import logo from '../images/logo.svg';
const Header = () => {
  return (
    <div className="headerBox">
      <div className="leftHeader">
        <p>My Balance</p>
        <h1>$921.48</h1>
      </div>
      <div className="rightHeader">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
