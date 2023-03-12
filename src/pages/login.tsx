import { useState } from "react";
import "./pages.modules.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/user/user.actions";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(login({ ...data, token: json.token }));
        navigate("/");
        return;
      })
      .catch((error) => {
        alert("please try another username or password");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <div className="LoginContainer">
      <div></div>
      <div>
        <div></div>
        <h1>APP NAME</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <div>
            <input
              type={passwordVisibility ? "text" : "password"}
              name="password"
              value={data.password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={passwordVisibility ? faEyeSlash : faEye}
              className="EyeIcon"
              onClick={handleToggle}
            />
          </div>
          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="LinktoSignup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
