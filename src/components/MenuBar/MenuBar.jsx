import { Container, Nav, Navbar } from "react-bootstrap";
import "./MenuBar.scss";

const MenuBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="menubar" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Sobre</Nav.Link>
              <Nav.Link>Equipe</Nav.Link>
              <Nav.Link>Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
