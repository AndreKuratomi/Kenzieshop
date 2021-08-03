import { useSelector } from "react-redux";

const TotalValue = () => {
  const cartProducts = useSelector((state) => state.products);
  const reducePrice = cartProducts.reduce((acc, cv) => acc + cv.price, 0);
  return (
    <div>
      <h1>Valor total da sua compra:</h1>
      <p>R$ {reducePrice}</p>
      <button>Finalizar compra!</button>
    </div>
  );
};

export default TotalValue;