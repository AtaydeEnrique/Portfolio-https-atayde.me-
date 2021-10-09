import SkillCard from "./SkillCard";

import figmaFront from "../../../assets/langs/figmafront.svg";
import figmaBack from "../../../assets/langs/figmaback.svg";
import photoshopFront from "../../../assets/langs/photoshopfront.svg";
import photoshopBack from "../../../assets/langs/photoshopback.svg";
import svgFront from "../../../assets/langs/svgFront.svg";
import svgBack from "../../../assets/langs/svgBack.svg";
import { Fragment } from "react";

const SkillUX = () => {
  return (
    <Fragment>
      <SkillCard top={figmaFront} bottom={figmaBack} desc="Figma" alt="Figma" />
      <SkillCard
        top={photoshopFront}
        bottom={photoshopBack}
        desc="Photoshop"
        alt="Photoshop"
      />
      <SkillCard top={svgFront} bottom={svgBack} desc="Svg" alt="Svg" />
    </Fragment>
  );
};

export default SkillUX;
