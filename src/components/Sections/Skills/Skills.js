import "./Skills.css";
import SkillFE from "./SkillFE";
import SkillBE from "./SkillBE";
import SkillUX from "./SkillUX";
import SkillTEC from "./SkillTEC";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skill-container">
        <h1 className="skill-title lax lax_preset_fadeInOut:309">.skills</h1>
        <div className="skill-group lax lax_preset_fadeInOut:309">
          <div className="skill-thinking">
            <h3>design.</h3>
          </div>
          <div className="skill-description">
            <h2>FRONT-END // </h2>
            <p>blablablablablabla</p>
          </div>
        </div>
        <div className="skill-set ">
          <SkillFE />
        </div>
        <div className="skill-group lax lax_preset_fadeInOut:309">
          <div className="skill-thinking">
            <h3>develop.</h3>
          </div>
          <div className="skill-description">
            <h2>BACK-END // </h2>
            <p>blablablablablabla</p>
          </div>
        </div>
        <div className="skill-set">
          <SkillBE />
        </div>
        <div className="skill-group lax lax_preset_fadeInOut:309">
          <div className="skill-thinking">
            <h3>create.</h3>
          </div>
          <div className="skill-description">
            <h2>UX // UI // TYPOGRAPHY // </h2>
            <p>blablablablablabla</p>
          </div>
        </div>
        <div className="skill-set2">
          <SkillUX />
        </div>
        <div className="skill-group lax lax_preset_fadeInOut:309">
          <div className="skill-thinking">
            <h3>connect.</h3>
          </div>
          <div className="skill-description">
            <h2>TECHNOLOGIES // </h2>
            <p>blablablablablabla</p>
          </div>
        </div>
        <div className="skill-set2">
          <SkillTEC />
        </div>
      </div>
    </section>
  );
};

export default Skills;
