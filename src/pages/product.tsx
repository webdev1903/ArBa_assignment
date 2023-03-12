import { useState, useEffect } from "react";
import { Item } from "../redux/user/user.reducer";
import ProductModal from "../components/productModal";

const getData = async (): Promise<Item[]> => {
  let data = await fetch(`https://fakestoreapi.com/products`);
  let res = await data.json();
  return res;
};

export default function Product() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);
  return (
    <div className="ProductContainer">
      <p>Products</p>
      <div className="SampleProducts">
        {data.length > 0 &&
          data.map((e: Item, i: number) => <ProductModal item={e} key={i} />)}
      </div>
    </div>
  );
}
