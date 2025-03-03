import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Recipe from "../pages/Recipe/Recipe";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:id" element={<Recipe />} /> {/* 🔥 NUEVA RUTA */}
      </Routes>
    </main>
  );
}

export default Main;
