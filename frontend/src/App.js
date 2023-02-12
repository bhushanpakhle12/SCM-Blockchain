import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";

import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // useState for redirecting to home only if user exists
  const [user, setLoginUser] = useState({});

  return (
    <div className="appContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />

          <Route path="/register" element={<Register />} />
          <Route
            path="/products"
            element={
              user && user._id ? (
                <Products setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
