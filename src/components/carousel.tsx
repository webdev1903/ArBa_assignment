import { useEffect, useState, useRef, MutableRefObject } from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = [
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
];

export default function Carousel() {
  const intervalIdRef: MutableRefObject<any | undefined> = useRef(undefined);
  const [carouselData, setCarouselData] = useState({
    a: data[0],
    b: data[1],
    c: data[2],
  });
  const [activeCircle, setActiveCircle] = useState(1);

  useEffect(() => {
    startCarousel();
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  const startCarousel = () => {
    let i = 0;
    intervalIdRef.current = setInterval(() => {
      setCarouselData({
        a: data[i],
        b: data[(i + 1) % 3],
        c: data[(i + 2) % 3],
      });
      setActiveCircle((i + 1) % 3);
      i++;
      if (i == 3) {
        i = 0;
      }
    }, 2000);
  };

  const circleStyles = (circleIndex: number) =>
    activeCircle === circleIndex
      ? { color: "rgb(28, 162, 215)" }
      : { color: "gray" };
  return (
    <div className="Carousel">
      <div>
        <img src={carouselData.a} alt="brokenimg" />
        <img src={carouselData.b} alt="brokenimg" />
        <img src={carouselData.c} alt="brokenimg" />
      </div>
      <div>
        <FontAwesomeIcon icon={faCircle} style={circleStyles(0)} />
        <FontAwesomeIcon icon={faCircle} style={circleStyles(1)} />
        <FontAwesomeIcon icon={faCircle} style={circleStyles(2)} />
      </div>
    </div>
  );
}
