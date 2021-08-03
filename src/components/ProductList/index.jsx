import { useHistory } from "react-router-dom";

import products from "../../products/products.js";
import ProductCard from "../ProductCard";

const ProductList = () => {
  const history = useHistory();
  const moveToCart = (tool) => {
    return tool;
  };
  return (
    <section>
      <header>
        <nav>
          <button onClick={() => moveToCart(history.push("/cart"))}>
            Ir para o carrinho
          </button>
        </nav>
      </header>
      <h1>KenzieShop!</h1>
      <div>
        {products &&
          products.map((elt, index) => (
            <div>
              <ProductCard elt={elt} index={index} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProductList;
