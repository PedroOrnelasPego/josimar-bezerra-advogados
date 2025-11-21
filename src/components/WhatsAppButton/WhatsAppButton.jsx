import "./WhatsAppButton.scss";
import PropTypes from "prop-types";

const WhatsAppButton = ({ text, img = true, number }) => {
  return (
    <div className="whatsapp">
      <a
        href={`https://wa.me//5531${number}?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F`}
        target="_blank"
        rel="noopener noreferrer"
        className="link-whatsapp"
      >
        <span>{text}</span>

        {img && (
          <img
            width="30"
            height="30"
            color="#FFFFFF"
            src="https://img.icons8.com/windows/FFFFFF/96/whatsapp--v1.png"
            alt="whatsapp--v1"
          />
        )}
      </a>
    </div>
  );
};

WhatsAppButton.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.bool,
  number: PropTypes.number.isRequired,
};

export default WhatsAppButton;
