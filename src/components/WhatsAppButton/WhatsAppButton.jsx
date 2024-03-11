import Button from "react-bootstrap/Button";
import whatsappico from "../../assets/icons/whatsapp.ico";
import "./WhatsAppButton.scss";

const WhatsAppButton = () => {
  return (
    <div className="whatsapp">
      <Button variant="success">
        <span>Entrar em contato</span>
        <a
          target="_blank"
          href="https://wa.me//5531984524218?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F"
          rel="noopener noreferrer"
          className="link-whatsapp"
        >
          <img
            src={whatsappico}
            alt="Fale Conosco pelo WhatsApp"
            title="Fale Conosco pelo WhatsApp"
            className="logo-whatsapp"
          />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
