import { REMOVE_PRODUCT } from "../actionTypes";
import { ADD_PRODUCT } from "../actionTypes";

export const addToCart = (product) => ({ type: ADD_PRODUCT, product });
export const removeFromCart = (item) => ({ type: REMOVE_PRODUCT, item });
