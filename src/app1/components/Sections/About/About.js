import { useState } from "react";

import Tilt from "react-parallax-tilt";
import TypeWriter from "../../UI/TypeWriter/TypeWriter";
import WorksModal from "../../UI/Modals/WorksModal";
import { Transition } from "react-transition-group";
import pokmnTrainer from "../../../assets/pokemon_trainer2.jpg";
import "./About.css";

const About = () => {
  const [works, setWorks] = useState(false);
  const [projects, setProjects] = useState(false);

  const worksMenuButtonHandler = () => {
    setWorks((w) => !w);
  };

  const projectMenuButtonHandler = () => {
    setProjects((p) => !p);
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
          hi, my name is Ricardo{" "}
          <TypeWriter
            speed={100}
            delay1={6000}
            delay2={300}
            text={["Atayde", "アタイで"]}
            emoji={["✌"]}
            classes="typewriter"
          />
          .<br />I craft apps that lead to enjoyable user experiences
        </h2>
        <div className="about-wrapper inner-element">
          <div className="about-headline">
            <p className="about-description">
              My journey as a programmer started with BASIC when I was 15, then,
              when I started my Bachelor's Degree I rediscovered my passion for
              programming and moved to C++, MATLAB, Python and Java, developing
              and publishing some apps and papers for scientific journals.
            </p>
              <div className="about-button-container">
              <button onClick={worksMenuButtonHandler} className="btn btn-about">
                Published Papers
              </button>
              <Transition in={works} timeout={1500} mountOnEnter unmountOnExit>
                {(state) => (
                  <WorksModal
                    close={worksMenuButtonHandler}
                    show={state}
                    works={1}
                  />
                )}
              </Transition>
              <button onClick={projectMenuButtonHandler} className="btn btn-about">
                React Projects
              </button>
              <Transition in={projects} timeout={1500} mountOnEnter unmountOnExit>
                {(state) => (
                  <WorksModal
                    close={projectMenuButtonHandler}
                    show={state}
                    works={2}
                  />
                )}
              </Transition>
              </div>
              
              <p className="about-description">
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
