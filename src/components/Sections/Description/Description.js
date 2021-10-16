import TypeWriter from "../../UI/TypeWriter/TypeWriter";

import "./Description.css";
import Resume from "../../../assets/misc/Resume.pdf";

const Description = () => {
  return (
    <section id="description">
      <div className="text-wrap">
        <p className="lax lax_preset_fadeInOut:100">
          I help people solving{" "}
          <span className="highlight1">real world problems</span> through smart
          design and refined strategy by using the{" "}
          <span className="highlight3">latest technologies</span>.
        </p>
      </div>
      <div className="text-wrap">
        <p className="lax lax_preset_fadeInOut:100">
          My inspiration is fueled by{" "}
          <span className="highlight1">photography</span>,{" "}
          <span className="highlight2">art</span>,{" "}
          <span className="highlight3">fashion</span>,
          <span className="highlight4">technology</span> and{" "}
          <span className="highlight5">computing</span>. It allows me to build
          an original vision.
        </p>
      </div>
      <div className="text-wrap">
        <p className="lax lax_preset_fadeInOut:100">
          I also have a degree in Mechatronics Engineering, and got caught by
          the programming side of it. You can talk to me in:
          <br />
          <TypeWriter
            speed={100}
            delay1={2000}
            delay2={100}
            text={[
              "English - B2 TOEFL",
              "Japanese - NOKEN N3 (B1)",
              "Spanish - Native",
            ]}
            emoji={["📖", "💬"]}
            classes="typewriter"
          />
        </p>
      </div>
      <button
        onClick={() => {
          window.open(Resume);
        }}
        className="btn btn-desc lax lax_preset_fadeInOut:309"
      >
        Resume
      </button>
    </section>
  );
};

export default Description;
