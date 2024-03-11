import { Card, CardGroup, Container } from "react-bootstrap";
import "./About.scss";

const About = () => {
  return (
    <Container>
      <div className="about">
        <div>
          <h2 className="about__title">Sobre</h2>
        </div>
        <div>
          <CardGroup>
            <Card>
              <Card.Body>
                <h4 className="card-title">Direito Civil</h4>
                <Card.Text>
                  No âmbito civil, lidamos com uma variedade de questões, desde
                  contratos comerciais até disputas de propriedade e
                  responsabilidade civil. Nossa experiência nos permite oferecer
                  orientação sólida e representação eficaz em casos complexos.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <h4 className="card-title">Direito Condominial</h4>
                <Card.Text>
                  Para questões relacionadas a condomínios, oferecemos uma gama
                  completa de serviços jurídicos, incluindo assessoria em
                  assembleias, elaboração de regulamentos internos, cobranças e
                  resolução de litígios entre condôminos. Nosso objetivo é
                  garantir a harmonia e a conformidade dentro da comunidade
                  condominial.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <h4 className="card-title">Direito Trabalhista</h4>
                <Card.Text>
                  Em questões trabalhistas, estamos ao lado dos trabalhadores e
                  empregadores. Prestamos assistência em casos de demissões
                  injustas, assédio no local de trabalho, negociações sindicais
                  e muito mais. Proteger os direitos e interesses das partes
                  envolvidas é nossa prioridade.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </Container>
  );
};

export default About;
