import { Card, CardGroup, Container } from "react-bootstrap";
import "./Team.scss";
import josimarBezerra from "../../assets/team/Josimar-Bezerra.png";
import gustavoMuglia from "../../assets/team/Gustavo-Muglia.png";
import marinaSantos from "../../assets/team/Marina-Santos-Costa.png";
import renataAndrade from "../../assets/team/Renata-Andrade.png";
import { Link } from "react-router-dom";
import WhatsAppButton from "../WhatsAppButton";

const Team = () => {
  return (
    <Container>
      <div className="team">
        <h2 className="team__title">Equipe</h2>
        <Card className="team__first__card">
          <Card.Img
            className="pessoa-img"
            alt="equipe Josimar Bezerra Advogados"
            variant="top"
            src={josimarBezerra}
          />
          <Card.Body className="team__card__body">
            <Card.Title>Dr. Josimar Bezerra</Card.Title>
            <Card.Text>
              <h6>Advogado</h6>
              <h6>Especializado em direito condominial e empresarial </h6>
              <h6>Professor de curso de formação de sindico profissional</h6>
              <h6>Atuante em condomínios há mais de 20 anos! </h6>
              <p>
                Graduação em Direito pela Faculdade de Direito da PONTIFÍCIA
                UNIVERSIDADE CATÓLICA DO ESTADO DE MINAS GERAIS. Belo Horizonte
                - fevereiro de 1993.
              </p>
              <p>
                Especialidades em Direito Civil, Direito Condominial, Direito
                Empresarial e Direito Público, Direto de Família e Direito
                Trabalhista e Tributário.
              </p>

              <div className="whatsapp">
                <Link to="/curriculo" className="link-whatsapp">
                  Ver Currilo completo
                </Link>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <CardGroup>
          <Card className="team__card">
            <p className="align-image">
              <Card.Img
                className="pessoa-img"
                alt="equipe Josimar Bezerra Advogados"
                variant="top"
                src={gustavoMuglia}
              />
            </p>

            <Card.Body>
              <Card.Title>Dr. Gustavo Muglia</Card.Title>
              <Card.Text>
                <h6>Advogado</h6>
                <h6>
                  Graduação em Direito pela Faculdade de Direito Milton Campos
                </h6>
                <p>
                  Especialista em Direito Tributário, Direito Societário pela
                  FGV e MBA em Negócios internacionais pela PUC/MG.
                </p>
                <p>
                  Área de atuação: contratos nacionais e internacionais,
                  tributário, empresarial, negócios internacionais, gestão,
                  promoção comercial e projetos de internacionalização.
                </p>
              </Card.Text>
            <div className="button">
              <WhatsAppButton text={"Entrar em contato"} number={"984711119"} />
            </div>
            </Card.Body>
          </Card>
          <Card className="team__card">
            <p className="align-image">
              <Card.Img
                className="pessoa-img"
                variant="top"
                alt="equipe Josimar Bezerra Advogados"
                src={marinaSantos}
              />
            </p>

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
            <div className="button">
              <WhatsAppButton text={"Entrar em contato"} number={"987533343"} />
            </div>
            </Card.Body>
          </Card>
          <Card className="team__card">
            <p className="align-image">
              <Card.Img
                className="pessoa-img"
                variant="top"
                alt="equipe Josimar Bezerra Advogados"
                src={renataAndrade}
              />
            </p>

            <Card.Body className="team__card__body">
              <Card.Title>Dra. Renata Andrade</Card.Title>
              <Card.Text>
                <h6>Advogada</h6>
                <h6>
                  Formação acadêmica Wilson Cerqueira Consultores Associados
                  Pós-graduação Lato Sensu
                </h6>
                <p>
                  Especialização, Relações Trabalhistas e Sindicais. Fundação
                  Getulio Vargas / FGV Pós-graduação Lato Sensu -
                  Especialização, Direito Bancário. Universidade Gama Filho
                  Pós-graduação Lato Sensu - Especialização, Direito do Trabalho
                  e Previdenciário.
                </p>
              </Card.Text>
            </Card.Body>
            <div className="button">
              <WhatsAppButton text={"Entrar em contato"} number={"997623235"} />
            </div>
          </Card>
        </CardGroup>
      </div>
    </Container>
  );
};

export default Team;
