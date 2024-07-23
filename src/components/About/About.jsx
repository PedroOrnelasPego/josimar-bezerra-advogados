import { Container } from "react-bootstrap";
import "./About.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="background-home">
      <Container>
        <div className="about-home">
          <div>
            <h2 className="about-title-home">Sobre</h2>
          </div>
          <div>
            <p>
              O escritório Josimar Bezerra Advogados está sediado na cidade de
              Belo Horizonte, além de ter bases de apoio em outras localidades, previlegiando assim um atendimento eficaz,
              abrangente e personalizado a seus clientes, pessoa física ou
              jurídica de qualquer porte.
            </p>
            <p>
              Tem como fundador e titular o Dr. Josimar Batista Bezerra,
              advogado há mais de 20 anos, com vasta área de conhecimento, tendo
              domínio de direito público e direito privado, além de boa
              experiência empresarial. Foi titular da assessoria jurídica do
              município de Belo Horizonte/MG, e contratado de diversas empresas
              de porte.
            </p>

            <Link to="/about" className="about-link-home">
              Click aqui para saber mais sobre nossas areas de atuação.
              <img
                width="18"
                height="18"
                src="https://img.icons8.com/ios-glyphs/30/FFFFFF/external-link.png"
                alt="external-link"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
