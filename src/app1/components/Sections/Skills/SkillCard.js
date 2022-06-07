import "./SkillCard.css";

const SkillCard = ({ top, bottom, desc, alt, classN }) => {
  return (
    <div className="skill-card">
      <div className={`lang-icon ${classN ? classN : ""}`}>
        <img className="icontp" src={top} alt={alt}></img>
        <img className="iconbtm" src={bottom} alt={`${alt} shadow`}></img>
      </div>
      <div className="lang-desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SkillCard;
