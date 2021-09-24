import Brand from "../../UI/Brand/Brand";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav">
        <div className="social">YO</div>
        <div className="fo-brand">
          <Brand classes={"fo-brand-icon"} />
        </div>
        <div className="social">SEXY</div>
      </div>
    </footer>
  );
};

export default Footer;
