import { REMOVE_PRODUCT } from "../actionTypes";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_PRODUCT:
      const { item } = action;
      return state.filter((elt) => elt !== item);
    default:
      return state;
  }
};
