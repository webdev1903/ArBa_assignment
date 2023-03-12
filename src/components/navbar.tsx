import "./components.modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { State } from "../redux/user/user.reducer";
import ProfileModal from "./profileModal";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const {
    user: { image },
    cart,
  } = useSelector((store: State) => store);
  const [flag, setFlag] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setFlag(false);
    }
  };

  return (
    <div className="Navbar">
      <p
        className="Logo"
        onClick={() => {
          return navigate("/");
        }}
      >
        Logo
      </p>
      <div>
        <div onClick={() => navigate("/cart")}>
          <FontAwesomeIcon icon={faCartShopping} className="Carticon" />
          <p className="CartLength">{cart.length}</p>
        </div>
        <div onClick={() => setFlag(true)} ref={ref}>
          <img src={image} />
          {flag && <ProfileModal />}
        </div>
      </div>
    </div>
  );
}
