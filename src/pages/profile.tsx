import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeTnC from "../components/homeTnC";
import { State } from "../redux/user/user.reducer";
import { modalFunction } from "./home";
import { toggleHomeTnc } from "../redux/user/user.actions";

export default function Profile() {
  const { user } = useSelector((store: State) => store);
  const [modalState, setModalState] = useState(false);
  const dispatch = useDispatch();

  const modalToggle: modalFunction = (flag) => {
    dispatch(toggleHomeTnc(flag));
    setModalState(false);
  };
  return (
    <div className="ProfileContainer">
      <img src={user.image} alt="profile" />
      <p>{user.username}</p>
      <p>{user.email}</p>
      <hr />
      <button onClick={() => setModalState(true)}>See T&C</button>
      {modalState && <HomeTnC handleChange={modalToggle} />}
    </div>
  );
}
