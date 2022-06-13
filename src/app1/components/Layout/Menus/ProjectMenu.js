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
            In this App, we make use of one the top cryptocurrencies API within RapidAPI <b>
            "<a href="https://rapidapi.com/Coinranking/api/coinranking1/" rel="noreferrer" target='_blank'>CoinRanking</a></b>",
            showcasing the top cryptocurrencies in the world, details and news for each of them.<br/>
            In addition, an Express server handles all the request through an own backend for API Keys protection, hosted in Heroku. 
            
          </h4>
          <br />
          <h5>React.js &nbsp;Redux &nbsp;Redux Toolkit &nbsp;API usage &nbsp;Heroku &nbsp;Express</h5>
        </div>
      </div>
      <div className="work-box">
        <div className="work-box_link">
          <a
            href="http://atayde.me/amazonscraper"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Link} alt="link icon" />
          </a>
        </div>
        <div className="work-box_content">
          <h3>
            Amazon Scraper App API
          </h3>
          <h6>React App</h6>
          <br />
          <h4>
            In this App, an Amazon Scraper API is implemented, the input will be the amazon product ID
            which will return a JSON object containing the product detail, reviews and offers depending on what we previously selected.
            This JSON object can be used in any other app.<br/>
            
          </h4>
          <br />
          <h5>React.js &nbsp;API usage &nbsp;Heroku &nbsp;Express</h5>
        </div>
      </div>
      <div className="work-box">
        <div className="work-box_link">
          <a
            href="http://atayde.me/placeadvisor"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Link} alt="link icon" />
          </a>
        </div>
        <div className="work-box_content">
          <h3>
            Travel Advisor App
          </h3>
          <h6>React App</h6>
          <br />
          <h4>
            In this App, we make use of RapidAPI's&nbsp;
             <b>"<a href="https://rapidapi.com/apidojo/api/travel-advisor/" rel="noreferrer" target='_blank'>Travel Advisor</a></b>"
            API, which let us search nearby restaurants, hotels and places. <br/>
            The Google Maps API is also used to display the location of each place we search.
          </h4>
          <br />
          <h5>React.js &nbsp;API usage &nbsp;Heroku &nbsp;Google Maps </h5>
        </div>
      </div>
      <div className="work-box">
        <div className="work-box_link">
          <a
            href="http://atayde.me/googl"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Link} alt="link icon" />
          </a>
        </div>
        <div className="work-box_content">
          <h3>
            Google Search
          </h3>
          <h6>React App</h6>
          <br />
          <h4>
            In this App, a Google mock up was created, allowing us to search sites, news, images and videos <br/>
            In addition, an Express server handles all the request through an own backend for API Keys protection, hosted in Heroku. 
            
          </h4>
          <br />
          <h5>React.js &nbsp;API usage &nbsp;Heroku &nbsp;Express &nbsp;React Context</h5>
        </div>
      </div>
    </div>
  );
};

export default WorkMenu;
