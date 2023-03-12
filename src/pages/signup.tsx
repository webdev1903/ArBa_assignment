import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [data, setData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confpassword: "",
  });
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [confPasswordVisibility, setConfPasswordVisibility] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="SignupContainer">
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
          <input
            type="text"
            name="fullname"
            value={data.fullname}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="email"
            value={data.email}
            placeholder="Email"
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
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            />
          </div>
          <div>
            <input
              type={confPasswordVisibility ? "text" : "password"}
              name="confpassword"
              value={data.confpassword}
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon
              icon={confPasswordVisibility ? faEyeSlash : faEye}
              className="EyeIcon"
              onClick={() => setConfPasswordVisibility(!confPasswordVisibility)}
            />
          </div>
          <input type="submit" value="Register" />
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/login" className="LinktoSignup">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
