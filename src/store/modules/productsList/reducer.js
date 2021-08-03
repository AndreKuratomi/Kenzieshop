import { ADD_PRODUCT } from "../actionTypes";

const initialState = [];

export const productsReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;
      return [...state, product];
    default:
      return state;
  }
};
