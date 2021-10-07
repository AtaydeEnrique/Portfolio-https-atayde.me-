import ContactModal from "../../UI/Modals/ContactModal";
import Kraken from "../../UI/Kraken/Kraken";
import "./ContactMenu.css";
import Form from "../../Sections/Form/Form";
const ContactMenu = ({ onClose }) => {
  return (
    <ContactModal onClose={onClose}>
      <div className="contact-menu">
        <div className="rainbow-wrap">
          <div className="rainbow-border">
            <span></span>
            <span></span>
          </div>
          <div className="contact">
            <div className="contact-title">Let's work together!</div>
            <Form />
          </div>
        </div>
      </div>
      <Kraken />
    </ContactModal>
  );
};

export default ContactMenu;
