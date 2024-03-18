import { Container } from "react-bootstrap";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="social-midia">
          <a href="">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/material-outlined/40/FFFFFF/whatsapp--v1.png"
              alt="whatsapp--v1"
            />
          </a>
          <a href="">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </a>
          <a href="">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="location">
          <a href="https://maps.app.goo.gl/weSyh7KcqZJvLiH49" target="_blank">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/30/FFFFFF/address--v1.png"
              alt="address--v1"
            />
            <span>
              Avenida Raja Gabaglia, 1000, Sala 805 - Gutierrez, Belo Horizonte
            </span>
          </a>
          <a href="https://maps.app.goo.gl/d1AHDCEHsNMFFcth9">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/30/FFFFFF/address--v1.png"
              alt="address--v1"
            />
            <span>R. Santa Cruz, 201 - Centro, Betim</span>
          </a>
        </div>
        <div className="direitos">
          <span>
            © 2024 Josimar Bezerra Advogados. Todos os direitos reservados.
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
