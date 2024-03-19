import { Container, Nav, Navbar } from "react-bootstrap";
import "./MenuBar.scss";
import logo from "../../assets/icons/justica.png";
import WhatsAppButton from "../WhatsAppButton";

const MenuBar = () => {
  return (
    <div>
      <Navbar data-bs-theme="dark" expand="lg" className="menubar-custom">
        <Container>
          <Navbar.Brand>
            <img className="logo_svg" src={logo} alt="logo Josimar Bezerra Advogados" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Sobre</Nav.Link>
              <Nav.Link>Equipe</Nav.Link>
              <Nav.Link>Contato</Nav.Link>
              <div className="whatsapp-nav">
                <WhatsAppButton text={"Entrar em contato"} img={false} />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
