import { useState } from "react";

import Tilt from "react-parallax-tilt";
import WorksModal from "../../UI/Modals/WorksModal";
import { Transition } from "react-transition-group";
import pokmnTrainer from "../../../assets/pokemon_trainer2.jpg";
import "./About.css";

const About = () => {
  const [works, setWorks] = useState(false);

  const menuButtonHandler = () => {
    setWorks((w) => !w);
  };

  return (
    <section id="about" className="lax">
      <Tilt
        className="parallax-effect"
        perspective={500}
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
      >
        <h2 className="about-title">
          Hi! I'm Ricardo, I craft apps that lead to enjoyable user experiences
        </h2>
        <div className="about-wrapper inner-element">
          <div className="about-headline">
            <p className="about-description">
              My journey as a programmer started with BASIC when I was 15, then,
              when I started my Bachelor's Degree I rediscovered my passion for
              programming and moved to C++, MATLAB, Python and Java, developing
              and publishing some apps and papers for scientific journals.
              <button onClick={menuButtonHandler} className="btn btn-about">
                See papers
              </button>
              <Transition in={works} timeout={1500} mountOnEnter unmountOnExit>
                {(state) => (
                  <WorksModal
                    works={works}
                    close={menuButtonHandler}
                    show={state}
                  />
                )}
              </Transition>
              Now I am trying to leverage my analytical and problem-solving
              skills in the process of designing digital and tangible solutions
              using technology for real-world challenges.
              <br />
              <br />
              You can expect from me to always be learning and improving
              everything I do, as well as developing myself as an Engineer, but
              most importantly, as a human being.
            </p>
          </div>
          <div className="about-img">
            <Tilt
              className="parallax-effect"
              perspective={500}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              tiltReverse={true}
            >
              <img src={pokmnTrainer} alt="Ricardo Atayde" />
            </Tilt>
          </div>
        </div>
      </Tilt>
    </section>
  );
};

export default About;
