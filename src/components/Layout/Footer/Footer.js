// import Brand from "../../UI/Brand/Brand";
import "./Footer.css";
import gitSVG from "../../../assets/contact/github.svg";
import linkedInSVG from "../../../assets/contact/linkedin.svg";

const Footer = ({ onClose }) => {
  return (
    <footer>
      <div id="contact" className="waves-footer">
        <div className="footer-info">
          <div className="contact-items lax lax_preset_fadeInOut:280">
            <div className="item-card">
              <a
                href="https://github.com/AtaydeEnrique"
                target="_blank"
                rel="noreferrer"
              >
                <img className="github-icon" src={gitSVG} alt="Github" />
              </a>
              <h5>Github</h5>
            </div>
            <div className="item-card">
              <a
                href="https://www.linkedin.com/in/ataydericardo/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkedin-icon" src={linkedInSVG} alt="Github" />
              </a>
              <h5>LinkedIn</h5>
            </div>
          </div>
          <div className="footer-wrap">
            <div className="footer-title lax lax_preset_fadeInOut:280">
              contact.
            </div>
            <div className="footer-message lax lax_preset_fadeInOut:280">
              Ready for working together, sending feedback or simply to say
              hello 👋 ? Great! Let's get in touch !
            </div>
            <button
              onClick={onClose}
              className="footer-btn lax lax_preset_fadeInOut:280"
            >
              Leave a message
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
