import "./Header.scss";

import headerimg from "../../assets/header-img.png";
import WhatsAppButton from "../WhatsAppButton";
import { Card, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Card>
        <div className="header">
          <div className="header__container">
            <div className="content">
              <div>
                <Card.Title>
                  <h1>Josimar Bezerra Advogados</h1>
                  <h2>
                    Advocacia especializada em direito civil, trabalhista,
                    família, sucessões e direito condominial
                  </h2>
                </Card.Title>

                <p>
                O Escritório de Advocacia JOSIMAR BEZERRA & ADVOGADOS, obriga-se no cumprimento de suas atividades profissionais a prestar os seus serviços profissionais como atividade meio, dispensando todo o zelo e toda a diligência na defesa dos direitos e interesses dos BENEFICIÁRIOS DO ATENDIMENTO, relativamente ao objeto proposto.
                </p>
              </div>
              <WhatsAppButton text={"Entrar em contato"} />
            </div>
            <div className="imagem">
              <img src={headerimg} alt="" />
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Header;
