import SkillCard from "./SkillCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";

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
const responsive = {
  1: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  330: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  450: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  850: {
    slidesPerView: 3,
    spaceBetween: 0,
  },
  1250: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

const SkillFE = () => {
  SwiperCore.use([Pagination, Navigation]);
  return (
    <Swiper
      freeMode={true}
      loop={true}
      navigation={true}
      breakpoints={responsive}
    >
      <SwiperSlide>
        <SkillCard
          top={jsFront}
          bottom={jsBack}
          desc="JavaScript"
          alt="JavaScript"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard top={cssFront} bottom={cssBack} desc="CSS" alt="CSS" />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard top={htmlFront} bottom={htmlBack} desc="HTML5" alt="HTML5" />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard
          top={reactFront}
          bottom={reactBack}
          desc="React"
          alt="React"
          classN="spin"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard
          top={reduxFront}
          bottom={reduxBack}
          desc="Redux"
          alt="Redux"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard
          top={bootstrapFront}
          bottom={bootstrapBack}
          desc="Bootstrap 5"
          alt="Bootstrap 5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard
          top={bulmaFront}
          bottom={bulmaBack}
          desc="Bulma"
          alt="Bulma"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SkillFE;
