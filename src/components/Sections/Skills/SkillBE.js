import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import SkillCard from "./SkillCard";
import "./Carousel/Carousel.css";

import phpFront from "../../../assets/langs/phpfront.svg";
import phpBack from "../../../assets/langs/phpback.svg";
import pythonFront from "../../../assets/langs/pythonfront.svg";
import pythonBack from "../../../assets/langs/pythonback.svg";
import mongodbFront from "../../../assets/langs/mongodbfront.svg";
import mongodbBack from "../../../assets/langs/mongodbback.svg";
import nodejsFront from "../../../assets/langs/nodejsfront.svg";
import nodejsBack from "../../../assets/langs/nodejsback.svg";

const SkillBE = () => {
  return (
    <Carousel
      plugins={[
        "infinite",
        "arrows",

        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 4,
          },
        },
      ]}
    >
      <SkillCard
        top={mongodbFront}
        bottom={mongodbBack}
        desc="MongoDB"
        alt="MongoDB"
      />
      <SkillCard
        top={nodejsFront}
        bottom={nodejsBack}
        desc="NodeJS"
        alt="NodeJS"
      />
      <SkillCard top={phpFront} bottom={phpBack} desc="PHP" alt="PHP" />
      <SkillCard
        top={pythonFront}
        bottom={pythonBack}
        desc="Python"
        alt="Python"
      />
    </Carousel>
  );
};

export default SkillBE;
