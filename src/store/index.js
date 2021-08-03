import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { productsReducer } from "./modules/productsList/reducer";
import { cartReducer } from "./modules/cartList/reducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
