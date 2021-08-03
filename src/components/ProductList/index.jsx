import { useHistory } from "react-router-dom";

import products from "../../products/products.js";
import ProductCard from "../ProductCard";

import { Section, Button } from "./styles";

const ProductList = () => {
  const history = useHistory();
  const moveToCart = (tool) => {
    return tool;
  };
  return (
    <section>
      <h1>KenzieShop!</h1>
      <Section>
        {products &&
          products.map((elt, index) => (
            <div>
              <ProductCard elt={elt} index={index} />
            </div>
          ))}
      </Section>
      <footer>
        <Button onClick={() => moveToCart(history.push("/cart"))}>
          Ir para o carrinho
        </Button>
      </footer>
    </section>
  );
};

export default ProductList;
