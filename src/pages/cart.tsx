import { useSelector } from "react-redux";
import { State } from "../redux/user/user.reducer";
import ProductModal from "../components/productModal";
import { Item } from "../redux/user/user.reducer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart } = useSelector((store: State) => store);
  const navigate = useNavigate();
  return (
    <div className="CartContainer">
      <p>My Cart</p>
      {cart.length > 0 && (
        <div>
          {cart.map((e: Item, i: number) => (
            <ProductModal item={e} key={i} />
          ))}
        </div>
      )}
      {cart.length === 0 && (
        <p>
          Your cart is empty, <Link to="/products">Click here</Link> to add
          products.
        </p>
      )}
      {cart.length > 0 && <button>Checkout</button>}
    </div>
  );
}
