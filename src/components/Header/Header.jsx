import "./Header.scss";

import headerimg from "../../assets/header-img.png";
import WhatsAppButton from "../WhatsAppButton";
import { Card } from "react-bootstrap";

const Header = () => {
  return (
    <Card>
      <div className="header">
        <div className="header__container">
          <div className="content">
            <div>
              <Card.Title>
                <h1>
                  Advocacia especializada em direito de família, sucessões e
                  imobiliário
                </h1>
              </Card.Title>

              <p>
                Nossa competência, organização e comprometimento nos capacitam a
                fornecer aos nossos clientes total suporte em seus momentos de
                urgência, garantindo atendimento personalizado e dedicado a cada
                um.
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
  );
};

export default Header;
