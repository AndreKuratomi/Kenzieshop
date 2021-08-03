import { useDispatch } from "react-redux";
import removeFromCart from "../../store/modules/cartList/actions";

const CartCard = ({ elt }) => {
  const dispatch = useDispatch();
  return (
    <article>
      <figure>
        <img src={elt.img} alt={elt.name} />
        <figcaption>{elt.name}</figcaption>
      </figure>
      <p>{elt.name}</p>
      <p>R$ {elt.price}</p>
      <button onClick={() => dispatch(removeFromCart(elt.name))}>
        Remover do carrinho
      </button>
    </article>
  );
};

export default CartCard;
