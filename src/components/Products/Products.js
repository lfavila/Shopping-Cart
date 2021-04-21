import React from 'react';
import Product from './Product/Product';

import { connect } from 'react-redux';

const Products = ({products}) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} data={product}/>
      ))}
    </>
  );
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products);
