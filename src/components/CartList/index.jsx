import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartCard from "../CartCard";
import TotalValue from "../TotalValue";

import { Section, Div, Footer } from "../CartList/styles";

const CartList = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <section>
      <Section>
        <div>
          <h1>Carrinho de compras</h1>
          <Div>
            {cartProducts &&
              cartProducts.map((elt, index) => (
                <div>
                  <CartCard elt={elt} index={index} />
                </div>
              ))}
          </Div>
        </div>
        <aside>
          <TotalValue />
        </aside>
      </Section>
      <Footer>
        <Link to="/">Voltar para a lista de produtos</Link>
      </Footer>
    </section>
  );
};

export default CartList;
