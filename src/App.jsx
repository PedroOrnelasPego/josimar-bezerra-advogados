import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MenuBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
