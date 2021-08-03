import { Switch, Route } from "react-router-dom";

import ProductList from "../components/ProductList";
import CartList from "../components/CartList";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route path="/cart">
        <CartList />
      </Route>
      <Route>
        <p>Página não encontrada!</p>
      </Route>
    </Switch>
  );
};

export default Routes;
