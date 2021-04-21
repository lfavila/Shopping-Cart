import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../../images/cartImg.png';

import { connect } from 'react-redux';

import style from './Navbar.module.css'

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <nav className="navbar navbar-default">
      <Link className="" to="/">
        <h2 className="">Shopping Cart</h2>
      </Link>
      <Link className="" to="/cart">
        <h3 className="d-inline">Cart</h3>
        <img className={`${style.cart}`} src={cartImg} alt="#" />
        <div className="d-inline">{cartCount}</div>
      </Link>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbar);
