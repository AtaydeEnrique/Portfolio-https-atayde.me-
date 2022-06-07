import { Fragment } from "react";

import SkillCard from "./SkillCard";
import gitFront from "../../../assets/langs/gitfront.svg";
import gitBack from "../../../assets/langs/gitback.svg";

const SkillTEC = () => {
  return (
    <Fragment>
      <SkillCard top={gitFront} bottom={gitBack} desc="Git" alt="Git" />
    </Fragment>
  );
};

export default SkillTEC;
