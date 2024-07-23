import "./Email.scss";
import PropTypes from "prop-types";

const Email = ({ email }) => {
  return (
    <div className="email">
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
        target="_blank"
        className="link-email"
      >
        <span>Enviar email</span>
        <img
          src="https://img.icons8.com/FFFFFF/parakeet-line/48/new-post.png"
          alt="Enviar email via Gmail"
          className="logo-email"
        />
      </a>
    </div>
  );
};
Email.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Email;
