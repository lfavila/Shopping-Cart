import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
  products: [
    {
        id: 1,
        title: 'Snes',
        description: 'um clássico dos games',
        price: 500.0,
        image:'https://http2.mlstatic.com/D_NQ_NP_922126-MLA32731490477_112019-O.webp',
    },
    {
        id: 2,
        title: 'PC',
        description: 'computador gamer',
        price: 3500.0,
        image:'https://images-americanas.b2w.io/produtos/01/00/img/2026509/1/2026509163_1GG.jpg',
    },
    {
        id: 3,
        title: 'Violão',
        description: 'Violão Eagle elétrico',
        price: 700.0,
        image:'https://images-americanas.b2w.io/produtos/01/00/img/1449052/6/1449052601_1GG.jpg',
    },
  ],
  cart: [],
  curItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((p) => p.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: +action.payload.qty }
          : item
        ),
      };
    case actionTypes.LOAD_CUR_ITEM:
      return {
        ...state,
        curItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
