import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About"; // Exemplo de outra página
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import Curriculo from "./pages/Curriculo";

function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />{" "}
          <Route path="/curriculo" element={<Curriculo />} />{" "}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
