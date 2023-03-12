import { Link } from "react-router-dom";
import "./components.modules.css";
import { logout } from "../redux/user/user.actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { persistor } from "../redux/store";

export default function ProfileModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await persistor.purge();
    dispatch(logout());
  };
  return (
    <ul className="ProfileModal">
      <li>
        <Link to="/profile" className="ModalItems">
          Profile
        </Link>
      </li>
      <li onClick={handleLogout}>
        <p className="ModalItems">Logout</p>
      </li>
      <li>
        <Link to="/challenge" className="ModalItems">
          Code Challenge
        </Link>
      </li>
    </ul>
  );
}
