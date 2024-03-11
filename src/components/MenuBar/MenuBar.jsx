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
            <img className="logo_svg" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Sobre</Nav.Link>
              <Nav.Link>Equipe</Nav.Link>
              <Nav.Link>Contato</Nav.Link>
              <Nav.Link>
                <WhatsAppButton text={"falar com especialista"} img={false} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
