import "./WorkMenu.css";
import Link from "../../../assets/misc/linkIcon.svg";

const WorkMenu = () => {
  return (
    <div className="works-wrap">
      <div className="work-box">
        <div className="work-box_link">
          <a
            href="http://atayde.me/cryptoapp"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Link} alt="link icon" />
          </a>
        </div>
        <div className="work-box_content">
          <h3>
            Cryptocurrency Information App (CryptoApp)
          </h3>
          <h6>React App</h6>
          <br />
          <h4>
            In this App, we make use of one the top criptocurrencies API within RapidAPI <b>
            "<a href="https://rapidapi.com/Coinranking/api/coinranking1/" rel="noreferrer" target='_blank'>CoinRanking</a></b>",
            showcasing top cryptocurrencies in the world, details and news for each of them.
            
          </h4>
          <br />
          <h5>React.js &nbsp;Redux &nbsp;Redux Toolkit &nbsp;API usage</h5>
        </div>
      </div>
      
    </div>
  );
};

export default WorkMenu;
