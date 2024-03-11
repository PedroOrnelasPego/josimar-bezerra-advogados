import whatsappico from "../../assets/icons/whatsapp.ico";
import "./WhatsAppButton.scss";
import PropTypes from 'prop-types';

const WhatsAppButton = ({ text, img = true }) => {
  return (
    <div className="whatsapp">
      <a
        href="https://wa.me//5531984524218?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="link-whatsapp"
      >
        <span>{text}</span>

        {img && (
          <img
            src={whatsappico}
            alt="Fale Conosco pelo WhatsApp"
            title="Fale Conosco pelo WhatsApp"
            className="logo-whatsapp"
          />
        )}
      </a>
    </div>
  );
};

WhatsAppButton.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.bool
}

export default WhatsAppButton;
