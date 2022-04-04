import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/modules/cartList/actions";
import { Image } from "./styles";

const CartCard = ({ elt }) => {
  const dispatch = useDispatch();
  return (
    <article>
      <figure>
        <Image src={elt.img} alt={elt.name} />
        <figcaption>{elt.name}</figcaption>
      </figure>
      <p>{elt.name}</p>
      <p>$ {elt.price}</p>
      <button onClick={() => dispatch(removeFromCart(elt))}>
        Remover do carrinho
      </button>
    </article>
  );
};

export default CartCard;
