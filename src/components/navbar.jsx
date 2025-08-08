

import React from 'react';
import './navbar.css';

const Navbar = ({ input, setInput }) => {
  return (
    <div id="navdiv">
      <nav>
        <ul>
          <li><img className="logo" src="flipkart_logo.png" alt="logo" /></li>
          <li><button className="loginbtn">LOGIN</button></li>
          <li><button className="cartbtn">CART</button></li>
          <li><button className="offerbtn">OFFERS</button></li>
          <li>
            <input
              className="searchbar"
              type="text"
              placeholder='Search product'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </li>
          <li><button>Search</button></li>
          <li className="signin">
            sign in
            <img className="signinlogo" src="imgi_3_avatar.png" alt="avatar" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
