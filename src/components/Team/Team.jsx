import { Card, CardGroup, Container } from "react-bootstrap";
import "./Team.scss";
import pessoa from "../../assets/cara1.png";

const Team = () => {
  return (
    <Container>
      <div className="team">
        <h2 className="team__title">Equipe</h2>
        <Card className="team__first__card">
          <Card.Img className="pessoa-img" variant="top" src={pessoa} />
          <Card.Body className="team__card__body">
            <Card.Title>Josimar Bezerra</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <CardGroup>
          <Card className="team__card">
            <Card.Img className="pessoa-img" variant="top" src={pessoa} />
            <Card.Body className="team__card__body">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="team__card">
            <Card.Img className="pessoa-img" variant="top" src={pessoa} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="team__card">
            <Card.Img className="pessoa-img" variant="top" src={pessoa} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="team__card">
            <Card.Img className="pessoa-img" variant="top" src={pessoa} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </Container>
  );
};

export default Team;
