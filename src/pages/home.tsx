import HomeTnC from "../components/homeTnC";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../redux/user/user.reducer";
import { useEffect, useState } from "react";
import { toggleHomeTnc } from "../redux/user/user.actions";
import Carousel from "../components/carousel";
import { Item } from "../redux/user/user.reducer";
import ProductModal from "../components/productModal";
import { useNavigate } from "react-router-dom";

export interface modalFunction {
  (arg1: boolean): void;
}

const getData = async (): Promise<Item[]> => {
  let data = await fetch("https://fakestoreapi.com/products?limit=8");
  let res = await data.json();
  return res;
};

export default function Home() {
  const { homeTnC } = useSelector((store: State) => store);
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState<Item[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!homeTnC) setModalState(true);
    getData().then((res) => setData(res));
  }, []);

  const modalToggle: modalFunction = (flag) => {
    dispatch(toggleHomeTnc(flag));
    setModalState(false);
  };

  return (
    <div className="Home">
      {modalState && <HomeTnC handleChange={modalToggle} />}
      <Carousel />
      <p>Products</p>
      <div className="SampleProducts">
        {data.length > 0 &&
          data.map((e: Item, i: number) => <ProductModal item={e} key={i} />)}
      </div>
      <button onClick={() => navigate("/products")}>All Products ▶️▶️</button>
    </div>
  );
}
