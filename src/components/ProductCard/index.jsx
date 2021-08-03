import { useDispatch } from "react-redux";
import addToCart from "../../store/modules/productsList/actions";

const ProductCard = ({ elt }) => {
  const dispatch = useDispatch();
  return (
    <article>
      <figure>
        <img src={elt.img} alt={elt.name} />
        <figcaption>{elt.name}</figcaption>
      </figure>
      <p>{elt.name}</p>
      <p>R$ {elt.price}</p>
      <button onClick={() => dispatch(addToCart(elt))}>
        Adicionar ao carrinho!
      </button>
    </article>
  );
};

export default ProductCard;
