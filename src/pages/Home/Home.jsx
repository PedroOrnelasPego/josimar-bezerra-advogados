import About from "../../components/About";
import Header from "../../components/Header";
import Team from "../../components/Team";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div id="about-section">
        <About />
      </div>
      <div id="team-section">
        <Team />
      </div>
    </div>
  );
};

export default Home;
