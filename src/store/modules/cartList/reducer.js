import { REMOVE_PRODUCT } from "../actionTypes";

const initialState = [];

const filterProducts = (arr, clickedItem) => {
  arr.filter((elt) => elt !== clickedItem);
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_PRODUCT:
      const { item } = action;
      return filterProducts(state, item);
    default:
      return state;
  }
};
