import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui/navbar.jsx";
import { Footer } from "./components/ui/footer.jsx";
import Home from "./pages/home.jsx";

function _layout() {
  return (
    <div className="layout">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default _layout;
