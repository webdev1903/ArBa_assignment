import "./App.css";
import AllRoutes from "./components/allRoutes";
import Navbar from "./components/navbar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const flag = location.pathname == "/login" || location.pathname == "/signup";

  return (
    <div className="App">
      {!flag && <Navbar />}
      <AllRoutes />
    </div>
  );
}

export default App;
