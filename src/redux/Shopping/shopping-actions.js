import * as actionTypes from './shopping-types';

export const addToCart = (itemId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const adjustQty = (itemId, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};

export const loadCurItem = (item) => {
  return {
    type: actionTypes.LOAD_CUR_ITEM,
    payload: {
      item,
    },
  };
};
