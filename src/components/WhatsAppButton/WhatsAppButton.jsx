import Button from "react-bootstrap/Button";
import whatsappico from "../../assets/icons/whatsapp.ico";
import "./WhatsAppButton.scss";
import PropTypes from 'prop-types';

const WhatsAppButton = ({ text, img = true }) => {
  const handleClick = () => {
    window.open(
      "https://wa.me//5531984524218?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
      "_blank"
    );
  };

  return (
    <div className="whatsapp">
      <Button
        onClick={handleClick}
        className="button-whatsapp"
        variant="success"
      >
        <span>{text}</span>
        <a
          target="_blank"
          href="https://wa.me//5531984524218?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"
          rel="noopener noreferrer"
          className="link-whatsapp"
        >
          {img && (
            <img
              src={whatsappico}
              alt="Fale Conosco pelo WhatsApp"
              title="Fale Conosco pelo WhatsApp"
              className="logo-whatsapp"
            />
          )}
        </a>
      </Button>
    </div>
  );
};

WhatsAppButton.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.bool
};

export default WhatsAppButton;
