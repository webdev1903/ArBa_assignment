import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { State } from "../redux/user/user.reducer";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { authenticated } = useSelector((store: State) => store);

  if (authenticated) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
