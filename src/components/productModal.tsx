import { Item } from "../redux/user/user.reducer";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, alterQuantity } from "../redux/user/user.actions";
import { State } from "../redux/user/user.reducer";

interface MyProps {
  item: Item;
}

export default function ProductModal({ item }: MyProps) {
  const { cart } = useSelector((store: State) => store);
  const prev = cart.filter((e) => e.id == item.id);
  const dispatch = useDispatch();

  const handleQuantity = (q: number): void => {
    dispatch(alterQuantity(item.id, q));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };
  return (
    <div className="ProductModal">
      <img src={item.image} alt="brokenimg" />
      <div>
        <p>
          {item.title
            .split(" ")
            .filter((e: string, i: number) => i < 3)
            .join(" ")}
          ...
        </p>
        <p>
          {item.description
            .split(" ")
            .filter((e: string, i: number) => i < 7)
            .join(" ")}
          ...
        </p>
        <p>Rs.{item.price}</p>
        {prev.length == 0 && (
          <button className="AddtoCart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}
        {prev.length > 0 && (
          <div className="GroupButton">
            <button onClick={() => handleQuantity(-1)}>-</button>
            <button disabled={true}>{prev[0].quantity}</button>
            <button onClick={() => handleQuantity(1)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}
