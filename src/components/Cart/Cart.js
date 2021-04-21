import React, { useEffect, useState } from 'react';
import CartItem from './CartItem/CartItem'

import { connect } from 'react-redux';

const Cart = ({cart}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} data={item} />
      ))}
      <h4>Cart</h4>
      <section>
        <p>TOTAL: ({totalItems} items)</p>
        <p>R$ {totalPrice}</p>
        <button className="btn btn-primary">Checkout</button>
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart);
