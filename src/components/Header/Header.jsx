import "./Header.scss";

import headerimg from "../../assets/header-img.png";
import WhatsAppButton from "../WhatsAppButton";

const Header = () => {
  return (
    <div className="teste">
      <div className="sub-container">
        <div className="conteudo">
          <h1 className="text-5xl mb-6">
            Advocacia especializada em direito de família, sucessões e
            imobiliário
          </h1>
          <p className="text-justify">
            Nossa competência, organização e comprometimento nos capacitam a
            fornecer aos nossos clientes total suporte em seus momentos de
            urgência, garantindo atendimento personalizado e dedicado a cada um.
          </p>
          <WhatsAppButton />
        </div>
        <div className="imagem">
          <img src={headerimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
