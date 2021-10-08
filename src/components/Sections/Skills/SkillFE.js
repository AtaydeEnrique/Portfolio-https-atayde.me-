import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import SkillCard from "./SkillCard";
import "./Carousel/Carousel.css";

import jsFront from "../../../assets/langs/jsfront.svg";
import jsBack from "../../../assets/langs/jsback.svg";
import cssFront from "../../../assets/langs/cssfront.svg";
import cssBack from "../../../assets/langs/cssback.svg";
import htmlFront from "../../../assets/langs/html5front.svg";
import htmlBack from "../../../assets/langs/html5back.svg";
import reactFront from "../../../assets/langs/reactfront.svg";
import reactBack from "../../../assets/langs/reactback.svg";
import reduxFront from "../../../assets/langs/reduxfront.svg";
import reduxBack from "../../../assets/langs/reduxback.svg";
import bootstrapFront from "../../../assets/langs/bootstrapfront.svg";
import bootstrapBack from "../../../assets/langs/bootstrapback.svg";
import bulmaFront from "../../../assets/langs/bulmafront.svg";
import bulmaBack from "../../../assets/langs/bulmaback.svg";

const SkillFE = () => {
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
      <SkillCard top={jsFront} bottom={jsBack} desc="JS" alt="js" />
      <SkillCard top={cssFront} bottom={cssBack} desc="CSS" alt="CSS" />
      <SkillCard top={htmlFront} bottom={htmlBack} desc="HTML5" alt="HTML5" />
      <SkillCard
        top={reactFront}
        bottom={reactBack}
        desc="React"
        alt="React"
        classN="spin"
      />
      <SkillCard top={reduxFront} bottom={reduxBack} desc="Redux" alt="Redux" />
      <SkillCard
        top={bootstrapFront}
        bottom={bootstrapBack}
        desc="Bootstrap 5"
        alt="Bootstrap 5"
      />
      <SkillCard top={bulmaFront} bottom={bulmaBack} desc="Bulma" alt="Bulma" />
    </Carousel>
  );
};

export default SkillFE;
