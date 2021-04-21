import React from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';

const SingleItem = ({cur, addToCart}) => {
  return (
    <>
      <img src={cur.item.image} alt={cur.item.title} />
      <section>
        <h1>{cur.item.title}</h1>
        <p>{cur.item.description}</p>
        <h4>R${cur.item.price}</h4>
      </section>
      <button className="btn btn-primary"onClick={() => addToCart(cur.item.id)}>Adicionar</button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    cur: state.shop.curItem,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
