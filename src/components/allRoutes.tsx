import { Routes, Route } from "react-router-dom";
import Cart from "../pages/cart";
import CodeChallenge from "../pages/codeChallenge";
import Home from "../pages/home";
import Login from "../pages/login";
import Product from "../pages/product";
import Profile from "../pages/profile";
import SignUp from "../pages/signup";
import PrivateRoute from "./privateRoute";
import NotFound from "../pages/notFound";

export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/challenge"
        element={
          <PrivateRoute>
            <CodeChallenge />
          </PrivateRoute>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
