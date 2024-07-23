import { Container } from "react-bootstrap";
import "./Curriculo.scss";

const Curriculo = () => {
  return (
    <div className="background">
      <Container>
        <h3>JOSIMAR BATISTA BEZERRA</h3>
        <h5>Curriculum Vitae Et Studiorum</h5>
        <h6>Sócio Administrador Da Josimar Bezerra Advogados & Advogados</h6>
        <p>Advogado OAB/MG n.º 60.937</p>
        <p>
          <strong>Escritório:</strong> Avenida Raja Gabaglia número 1000,
          Conjunto 805- Cidade Jardim – Belo Horizonte – MG. Telefone
          031-33445088.
        </p>
      </Container>
    </div>
  );
};

export default Curriculo;
