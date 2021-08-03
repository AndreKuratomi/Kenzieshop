import { ADD_PRODUCT } from "../actionTypes";
import { REMOVE_PRODUCT } from "../actionTypes";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;
      return [...state, product];
    case REMOVE_PRODUCT:
      const { item } = action;
      console.log(item);
      return state.filter((elt) => elt.name !== item.name);
    default:
      return state;
  }
};
