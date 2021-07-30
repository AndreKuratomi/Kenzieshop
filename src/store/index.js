import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productReducer from "./modules/products/reducers";
import cartReducer from "./modules/cart/reducers";

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
