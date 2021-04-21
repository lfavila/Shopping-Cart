import React, { useState } from 'react';

import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../../../redux/Shopping/shopping-actions';

const CartItem = ({data, removeFromCart, adjustQty}) => {
  const [input, setInput] = useState(data.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(data.id, e.target.value);
  }
  return (
    <>
      <img src={data.image} alt={data.title} />
      <section>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <h4>R${data.price}</h4>
      </section>
      <section>
        <label htmlFor="qty">Qty</label>
        <input
          min="1"
          type="number"
          id="qty"
          name="qty"
          value={input}
          onChange={onChangeHandler}
        />
        <button className="btn btn-primary" onClick={() => removeFromCart(data.id)}>
          deletar
        </button>
      </section>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id,value)),
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
