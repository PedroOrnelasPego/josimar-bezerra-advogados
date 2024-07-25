import { Card, Container } from "react-bootstrap";
import WhatsAppButton from "../WhatsAppButton";
import headerimg from "../../assets/back-image/header-img.png";
import imageTitle from "../../assets/back-image/image-title3.png";
import "./Header.scss";

const Header = () => {
  return (
    <Container>
      <Card>
        <div className="header">
          <div className="header__container">
            <div className="content">
              <div>
                <Card.Title>
                  <div className="image-title">
                    <img src={imageTitle} alt="" />
                  </div>
                  <h5>
                    Advocacia especializada em Direito Cível, Empresarial,
                    Trabalhista, Família, Imobiliário, Sucessões, Planejamento
                    sucessório e patrimonial, Internacional e Condominial.
                  </h5>
                </Card.Title>
                <p>
                  O escritório Josimar Bezerra & Advogados obriga-se, no
                  cumprimento de suas atividades profissionais, a prestar os
                  seus serviços como atividade meio, dispensando zelo e
                  diligência na defesa dos direitos e interesses dos clientes.
                </p>
              </div>
              <WhatsAppButton text={"Entrar em contato"} number={996881200} />
            </div>
            <div className="imagem">
              <img src={headerimg} alt="imagem de cabeçalho" />
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Header;
