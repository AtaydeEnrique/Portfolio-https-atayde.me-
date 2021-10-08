import gitFront from "../../../assets/langs/gitfront.svg";
import gitBack from "../../../assets/langs/gitback.svg";
import figmaFront from "../../../assets/langs/figmafront.svg";
import figmaBack from "../../../assets/langs/figmaback.svg";
import photoshopFront from "../../../assets/langs/photoshopfront.svg";
import photoshopBack from "../../../assets/langs/photoshopback.svg";

import "./Skills.css";
import SkillFE from "./SkillFE";
import SkillBE from "./SkillBE";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skill-container">
        <h1 className="skill-title">.skills</h1>
        <div className="skill-group">
          <div className="skill-thinking">
            <h3>design.</h3>
          </div>
          <div className="skill-descrption">
            <h2>FRONT-END // </h2>
            <p>blablablablablabla</p>
          </div>
        </div>
        <SkillFE />
        <div className="skill-group">
          <div className="skill-thinking">
            <h3>develop.</h3>
          </div>
          <div className="skill-descrption">
            <h2>BACK-END // </h2>
            <p>blablablablablabla</p>
          </div>
        </div>
        <SkillBE />
        <div className="skill-group">
          <div className="skill-thinking">
            <h3>create.</h3>
          </div>
          <div className="skill-descrption">
            <h2>UX // UI // TYPOGRAPHY // STRATEGY </h2>
            <p>blablablablablabla</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
