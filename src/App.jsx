import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div>
      <MenuBar />
      <Home />
    </div>
  );
}

export default App;
