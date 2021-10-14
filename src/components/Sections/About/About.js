import { useState } from "react";

import Tilt from "react-parallax-tilt";
import MenuModal from "../../UI/Modals/MenuModal";
import { Transition } from "react-transition-group";
import pokmnTrainer from "../../../assets/pokemon_trainer2.jpg";
import "./About.css";

const About = ({ overflowHandler, workMenu }) => {
  const [works, setWorks] = useState(false);

  const menuButtonHandler = () => {
    setWorks((w) => !w);
    overflowHandler(works);
  };

  return (
    <section id="about">
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
              programmnig and moved to C++, MATLAB, Python and Java, developing
              and publishing some apps for scientific journals.
              <button onClick={menuButtonHandler}>See works</button>
              <Transition in={works} timeout={1000} mountOnEnter unmountOnExit>
                {(state) => (
                  <MenuModal
                    works={works}
                    close={menuButtonHandler}
                    show={state}
                  />
                )}
              </Transition>
              <br />
              <br />
              Now I am trying to leverage my analytical and problem-solving
              skills in the process of designing digital and tangible solutions
              using technology for real-world challenges.
              <br />
              <br />
              You can expect from me to always be learning everyday and
              improving everything I do as well as developing myself as an
              Engineer, but most importantly, as a human being.
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
