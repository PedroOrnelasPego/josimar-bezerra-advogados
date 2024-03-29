import { Card, CardGroup, Container } from "react-bootstrap";
import "./Team.scss";
import pessoa from "../../assets/cara1.png";
import josimarBezerra from "../../assets/team/Josimar-Bezerra.png";
import gustavoMuglia from "../../assets/team/Gustavo-Muglia.png";
import MarinaSantos from "../../assets/team/Marina-Santos-Costa.png";

const Team = () => {
  return (
    <Container>
      <div className="team">
        <h2 className="team__title">Equipe</h2>
        <Card className="team__first__card">
          <Card.Img className="pessoa-img" variant="top" src={josimarBezerra} />
          <Card.Body className="team__card__body">
            <Card.Title>Dr. Josimar Bezerra</Card.Title>
            <Card.Text>
              <h6>Especializado em direito condominial e empresarial </h6>
              <h6>Professor de curso de formação de sindico profissional</h6>
              <h6>Atuante em condomínios há mais de 20 anos! </h6>
            </Card.Text>
          </Card.Body>
        </Card>
        <CardGroup>
          <Card className="team__card">
            <Card.Img className="pessoa-img" variant="top" src={pessoa} />
            <Card.Body className="team__card__body">
              <Card.Title>Dra. Elene Fernandes</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="team__card">
            <Card.Img
              className="pessoa-img"
              variant="top"
              src={gustavoMuglia}
            />
            <Card.Body>
              <Card.Title>Dr. Gustavo Muglia</Card.Title>
              <Card.Text>
                <h6>
                  Graduação em Direito pela Faculdade de Direito Milton Campos
                </h6>
                <h6>Advogado</h6>
                <p>
                  Especialista em Direito Tributário e MBA em Negócios
                  internacionais pela PUC/MG. Área de atuação: contratos
                  nacionais e internacionais/tributário/empresarial/negócios
                  internacionais/gestão/promoção comercial/ projetos de
                  internacionalização.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card className="team__card">
            <Card.Img className="pessoa-img" variant="top" src={MarinaSantos} />
            <Card.Body className="team__card__body">
              <Card.Title>Dra. Marina Santos Costa</Card.Title>
              <Card.Text>
                <h6>Advogada</h6>
                <h6>
                  Pós-graduada em Direito Administrativo na Administração
                  Pública, e em fase de especialização na LGPD- Lei Geral de
                  Proteção de Dados.
                </h6>
                Atuação voltada para assessoria preventiva e contenciosa na área
                de Direito Condominial, com experiência em elaboração de
                Convenção e Regimento Interno. Direito de família, direito
                trabalhista e Empresarial.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="team__card">
            <Card.Img className="pessoa-img" variant="top" src={pessoa} />
            <Card.Body>
              <Card.Title>Dr. Gustavo Muglia</Card.Title>
              <Card.Text>
                Graduação em Direito pela Faculdade de Direito Milton Campos .
                Advogado. Especialista em Direito Tributário e MBA em Negócios
                internacionais pela PUC/MG. Área de atuação: contratos nacionais
                e internacionais/tributário/empresarial/negócios
                internacionais/gestão/promoção comercial/ projetos de
                internacionalização.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </Container>
  );
};

export default Team;
