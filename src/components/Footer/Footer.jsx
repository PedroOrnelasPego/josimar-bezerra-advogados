import { Container } from "react-bootstrap";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="social-midia">
          <a
            href="https://wa.me//5531996881200?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/material-outlined/38/FFFFFF/whatsapp--v1.png"
              alt="whatsapp--v1"
            />
          </a>
          <a
            href="https://www.instagram.com/josimarbezerraadvogados/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/fluency-systems-regular/38/FFFFFF/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </a>
          <a href="">
            <img
              width="38"
              height="38"
              src="https://img.icons8.com/fluency-systems-regular/38/FFFFFF/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="location">
          <a href="https://maps.app.goo.gl/weSyh7KcqZJvLiH49" target="_blank">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/ios-filled/24/FFFFFF/address--v1.png"
              alt="address--v1"
            />
            <span>
              Avenida Raja Gabaglia, 1000, Sala 805 - Gutierrez, Belo Horizonte
            </span>
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
