import { useState } from "react";
import pokmnTrainer from "../../../assets/pokemon_trainer.jpg";
import Tilt from "react-parallax-tilt";

import "./HomeImage.css";
const HomeImage = () => {
  const [hachi, setHachi] = useState(false);
  return (
    <div className="trainer-img">
      <Tilt className="parallax-effect" perspective={500} scale={1.02}>
        <img
          src={pokmnTrainer}
          alt="Me"
          onMouseEnter={() => {
            setHachi(true);
          }}
          onMouseLeave={() => {
            setHachi(false);
          }}
        />
        <div className={`trainer-img-footer${hachi ? " hachi-visible" : ""}`}>
          Hachikō!
        </div>
      </Tilt>
    </div>
  );
};

export default HomeImage;
