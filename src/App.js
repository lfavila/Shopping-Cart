import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import SingleItem from './components/SingleItem/SingleItem';

import { connect } from 'react-redux';

function App({curItem}) {
  return (
    <div className="App">
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        {!curItem ? (
          <Redirect to="/" />
        ) : (
          <Route exact path="/product/:id" component={SingleItem} />
        )}
      </Switch>
    </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    curItem: state.shop.curItem,
  }
}

export default connect(mapStateToProps)(App);
