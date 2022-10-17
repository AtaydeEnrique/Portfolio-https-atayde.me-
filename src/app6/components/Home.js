import React from "react";
import Tilt from "react-parallax-tilt";
import TypeWriter from "../../app1/components/UI/TypeWriter/TypeWriter";
import pokmnTrainer from "../../app1/assets/pokemon_trainer2.jpg";

import "./Home.css";

function Home() {
  return (
    <section id="blog-home" className="lax">
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
            delay1={3000}
            delay2={300}
            text={["Atayde", "アタイで"]}
            emoji={["✌"]}
            classes="typewriter"
          />
          .
        </h2>
        <div className="about-wrapper inner-element">
          <div className="about-headline">
            <p className="about-description">
              My journey as a programmer started with BASIC when I was 15, then,
              when I started my Bachelor's Degree I rediscovered my passion for
              programming and moved to C++, MATLAB, Python and Java, developing
              and publishing some apps and papers for scientific journals.
            </p>

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
}

export default Home;
