import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
     <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/product">Product</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
    </ul> 
    </header>
  )
}

export default Header
