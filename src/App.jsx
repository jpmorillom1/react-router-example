import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import User from "./pages/User.jsx";
import Product from "./pages/Product.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Students from "./pages/Students.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/users" element={<User />} />
          <Route path="/students" element={<Students />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
