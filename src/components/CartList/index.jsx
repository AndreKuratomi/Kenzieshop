import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartCard from "../CartCard";
import TotalValue from "../TotalValue";

const CartList = () => {
  const cartProducts = useSelector((state) => state.products);
  return (
    <section>
      <header>
        <nav>
          <Link to="/">Voltar para a lista de produtos</Link>
        </nav>
      </header>
      <section>
        <h2>Carrinho de compras</h2>
        <div>
          {cartProducts &&
            cartProducts.map((elt, index) => (
              <div>
                <CartCard elt={elt} index={index} />
              </div>
            ))}
        </div>
        <aside>
          <TotalValue />
        </aside>
      </section>
    </section>
  );
};

export default CartList;
