import { Card, CardGroup, Container } from "react-bootstrap";
import "./About.scss";

const About = () => {
  return (
    <div className="background">
      <Container>
        <div className="about">
          <div>
            <h2 className="about__title">Sobre</h2>
          </div>
          <div>
            <p>
              O escritório Josimar Bezerra Advogados está sediado na cidade de
              Belo Horizonte, além de ter base de apoio na cidade de Betim, em
              uma localização privilegiada que permite um atendimento eficaz,
              abrangente e personalizado a seus clientes, pessoa física ou
              jurídica de qualquer porte.
            </p>
            <p>
              Tem como fundador e titular o Dr. Josimar Batista Bezerra,
              advogado há mais de 20 anos, com vasta área de conhecimento, tendo
              domínio de direito público e direito privado, além de boa
              experiência empresarial. Foi titular da assessoria jurídica do
              Município de Belo Horizonte/MG, e contratado de diversas empresas
              de porte.
            </p>
            <CardGroup>
              <Card>
                <Card.Body>
                  <h4 className="card-title">Direito Civil</h4>
                  <Card.Text>
                    No âmbito civil, lidamos com uma variedade de questões,
                    desde contratos comerciais até disputas de propriedade e
                    responsabilidade civil. Nossa experiência nos permite
                    oferecer orientação sólida e representação eficaz em casos
                    complexos.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <h4 className="card-title">Direito Condominial</h4>
                  <Card.Text>
                    Para questões relacionadas a condomínios, oferecemos uma
                    gama completa de serviços jurídicos, incluindo assessoria em
                    assembleias, elaboração de regulamentos internos, cobranças
                    e resolução de litígios entre condôminos. Nosso objetivo é
                    garantir a harmonia e a conformidade dentro da comunidade
                    condominial.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <h4 className="card-title">Direito Trabalhista</h4>
                  <Card.Text>
                    Em questões trabalhistas, estamos ao lado dos trabalhadores
                    e empregadores. Prestamos assistência em casos de demissões
                    injustas, assédio no local de trabalho, negociações
                    sindicais e muito mais. Proteger os direitos e interesses
                    das partes envolvidas é nossa prioridade.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card>
                <Card.Body>
                  <p>Saber mais</p>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
