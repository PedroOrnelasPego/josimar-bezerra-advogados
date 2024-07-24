import { Card, Container } from "react-bootstrap";
import "./Team.scss";
import josimarBezerra from "../../assets/team/Josimar-Bezerra.png";
import gustavoMuglia from "../../assets/team/Gustavo-Muglia.png";
import marinaSantos from "../../assets/team/Marina-Santos-Costa.png";
import renataAndrade from "../../assets/team/Renata-Andrade.png";
import { Link } from "react-router-dom";
import WhatsAppButton from "../WhatsAppButton";
import PropTypes from "prop-types";
import Email from "../Email";

const teamMembers = [
  {
    name: "Dr. Josimar Bezerra",
    role: "Advogado",
    imgSrc: josimarBezerra,
    description: (
      <>
        <h6>Especializado em direito condominial e empresarial </h6>
        <h6>Professor de curso de formação de síndico profissional</h6>
        <h6>Atuante em condomínios há mais de 30 anos! </h6>
        <p>
          Graduação em Direito pela Faculdade de Direito da PONTIFÍCIA
          UNIVERSIDADE CATÓLICA DO ESTADO DE MINAS GERAIS. Belo Horizonte -
          fevereiro de 1993.
        </p>
        <p>
          Especialidades em Direito Civil, Direito Condominial, Direito
          Empresarial e Direito Público, Direto de Família e Direito Trabalhista
          e Tributário.
        </p>
        <div className="whatsapp">
          <Link to="/curriculo" className="link-whatsapp">
            Ver Currilo completo
          </Link>
        </div>
      </>
    ),
    showWhatsApp: false,
  },
  {
    name: "Dr. Gustavo Muglia",
    role: "Advogado",
    imgSrc: gustavoMuglia,
    description: (
      <>
        <h6>Graduação em Direito pela Faculdade de Direito Milton Campos</h6>
        <p>
          Especialista em Direito Tributário, Direito Societário pela FGV e MBA
          em Negócios internacionais pela PUC/MG.
        </p>
        <p>
          Área de atuação: contratos nacionais e internacionais, tributário,
          empresarial, negócios internacionais, gestão, promoção comercial e
          projetos de internacionalização.
        </p>
      </>
    ),
    whatsappNumber: "984711119",
    email: "gustavo@josimarbezerraadvogados.com.br",
  },
  {
    name: "Dra. Marina Santos Costa",
    role: "Advogada",
    imgSrc: marinaSantos,
    description: (
      <>
        <h6>
          Pós-graduada em Direito Administrativo na Administração Pública, e em
          fase de especialização na LGPD - Lei Geral de Proteção de Dados.
        </h6>
        <p>
          Atuação voltada para assessoria preventiva e contenciosa na área de
          Direito Condominial, com experiência em elaboração de Convenção e
          Regimento Interno. Direito de família, direito trabalhista e
          Empresarial.
        </p>
      </>
    ),
    whatsappNumber: "987533343",
    email: "marina@josimarbezerraadvogados.com.br",
  },
  {
    name: "Dra. Renata Andrade",
    role: "Advogada",
    imgSrc: renataAndrade,
    description: (
      <>
        <h6>
          Formação acadêmica Wilson Cerqueira Consultores Associados
          Pós-graduação Lato Sensu
        </h6>
        <p>
          Especialização, Relações Trabalhistas e Sindicais. Fundação Getulio
          Vargas / FGV Pós-graduação Lato Sensu - Especialização, Direito
          Bancário. Universidade Gama Filho Pós-graduação Lato Sensu -
          Especialização, Direito do Trabalho e Previdenciário.
        </p>
      </>
    ),
    whatsappNumber: "997623235",
    email: "renata@josimarbezerraadvogados.com.br",
  },
];

const TeamMemberCard = ({
  name,
  role,
  imgSrc,
  description,
  whatsappNumber,
  email,
}) => (
  <Card className="team__card">
    <div className="align-image">
      <Card.Img
        className="pessoa-img"
        alt={`equipe ${name}`}
        variant="top"
        src={imgSrc}
      />
    </div>
    <Card.Body className="team__card__body">
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <h6>{role}</h6>
        {description}
      </Card.Text>
      {whatsappNumber && (
        <div className="button">
          <WhatsAppButton text={"Entrar em contato"} number={whatsappNumber} />
          <Email email={email} />
        </div>
      )}
    </Card.Body>
  </Card>
);

const Team = () => {
  return (
    <Container>
      <div className="team">
        <h2 className="team__title">Equipe</h2>
        <TeamMemberCard {...teamMembers[0]} />
        {teamMembers.slice(1).map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </Container>
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  whatsappNumber: PropTypes.string,
  email: PropTypes.string,
};

export default Team;
