import { Card, CardGroup, Container } from "react-bootstrap";
import "./About.scss";

const About = () => {
  return (
    <Container>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Direito do Consumidor</Card.Title>
            <Card.Text>
              Nossa equipe comprometida trabalha para simplificar o sistema
              jurídico, proporcionando serviços compreensíveis e orientados para
              atender às diversas necessidades de nossos clientes.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default About;
