import { REMOVE_PRODUCT } from "../actionTypes";

const removeFromCart = (item) => ({ type: REMOVE_PRODUCT, item });

export default removeFromCart;
