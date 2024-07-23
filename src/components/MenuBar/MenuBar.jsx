import { Container, Nav, Navbar } from "react-bootstrap";
import "./MenuBar.scss";
import logo from "../../assets/icons/justica.png";
import WhatsAppButton from "../WhatsAppButton";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div>
      <Navbar data-bs-theme="dark" expand="lg" className="menubar-custom">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                className="logo_svg"
                src={logo}
                alt="logo Josimar Bezerra Advogados"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                Sobre
              </Link>
              <Link>
                Equipe
              </Link>
              <Link className="nav-link" to="/contato">Contato</Link>
              <div className="whatsapp-nav">
                <WhatsAppButton text={"Entrar em contato"} img={false} number={996881200}/>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
