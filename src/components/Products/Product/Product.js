import React from 'react';
import { Link } from 'react-router-dom';
// import game from '../../../images/game.jpg';

import { connect } from 'react-redux';
import { addToCart, loadCurItem } from '../../../redux/Shopping/shopping-actions';

import style from './Product.module.css'

const Product = ({data, addToCart, loadCurItem}) => {
  return (
    <div className="card float-left" style={ {width: '18rem'} }>
      <img className={`${style.product} card-img-top`} src={data.image} alt="#" />
      <section className="card-body">
        <p className="card-title">{data.title}</p>
        <p className="card-text">{data.description}</p>
        <p className="card-text">{data.price}</p>
      </section>
      <section>
        <Link to={`/product/${data.id}`}>
          <button className="btn btn-primary" onClick={() => loadCurItem(data)}>Ver Produto</button>
        </Link>
        <button className="btn btn-primary" onClick={() => addToCart(data.id)}>Adicionar</button>
      </section>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurItem: (item) => dispatch(loadCurItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(Product);
