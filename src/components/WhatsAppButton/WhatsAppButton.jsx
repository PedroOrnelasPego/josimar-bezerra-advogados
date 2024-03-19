import whatsappico from "../../assets/icons/whatsapp.ico";
import "./WhatsAppButton.scss";
import PropTypes from 'prop-types';

const WhatsAppButton = ({ text, img = true }) => {
  return (
    <div className="whatsapp">
      <a
        
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
