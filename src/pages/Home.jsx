import About from "../components/About";
import Header from "../components/Header";
import Team from "../components/Team";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Team />
    </div>
  );
};

export default Home;
