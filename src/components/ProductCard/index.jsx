import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cartList/actions";
import { Image } from "./styles";

const ProductCard = ({ elt }) => {
  const dispatch = useDispatch();
  return (
    <article>
      <figure>
        <Image src={elt.img} alt={elt.name} />
        <figcaption>{elt.name}</figcaption>
      </figure>
      <p>{elt.name}</p>
      <p>$ {elt.price}</p>
      <button onClick={() => dispatch(addToCart(elt))}>
        Adicionar ao carrinho!
      </button>
    </article>
  );
};

export default ProductCard;
