import { Container, Nav, Navbar } from "react-bootstrap";
import "./MenuBar.scss";

const MenuBar = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary p-10 text-lg"
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="text-black">Home</Nav.Link>
              <Nav.Link className="text-black">Sobre</Nav.Link>
              <Nav.Link className="text-black">Equipe</Nav.Link>
              <Nav.Link className="text-black">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;
