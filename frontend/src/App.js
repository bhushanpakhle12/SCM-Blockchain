import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import "./css/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarModel from "./models/NavbarModel";

function App() {
  return (
    <div className="appContainer">
      <NavbarModel />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
