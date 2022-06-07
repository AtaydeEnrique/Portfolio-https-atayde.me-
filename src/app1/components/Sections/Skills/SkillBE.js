import SkillCard from "./SkillCard";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper";

import phpFront from "../../../assets/langs/phpfront.svg";
import phpBack from "../../../assets/langs/phpback.svg";
import pythonFront from "../../../assets/langs/pythonfront.svg";
import pythonBack from "../../../assets/langs/pythonback.svg";
import mongodbFront from "../../../assets/langs/mongodbfront.svg";
import mongodbBack from "../../../assets/langs/mongodbback.svg";
import postgresqlFront from "../../../assets/langs/postgresqlfront.svg";
import postgresqlBack from "../../../assets/langs/postgresqlback.svg";
import mysqlFront from "../../../assets/langs/mysqlfront.svg";
import mysqlBack from "../../../assets/langs/mysqlback.svg";
import nodejsFront from "../../../assets/langs/nodejsfront.svg";
import nodejsBack from "../../../assets/langs/nodejsback.svg";

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

const SkillBE = () => {
  SwiperCore.use([Pagination, Navigation]);
  return (
    <Swiper
      slidesPerView={4}
      freeMode={true}
      loop={true}
      navigation={true}
      breakpoints={responsive}
    >
      <SwiperSlide>
        <SkillCard
          top={pythonFront}
          bottom={pythonBack}
          desc="Python"
          alt="Python"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard
          top={mongodbFront}
          bottom={mongodbBack}
          desc="MongoDB"
          alt="MongoDB"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard
          top={nodejsFront}
          bottom={nodejsBack}
          desc="NodeJS"
          alt="NodeJS"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard 
          top={phpFront} 
          bottom={phpBack} 
          desc="PHP" 
          alt="PHP" />
      </SwiperSlide>
      <SwiperSlide>
        <SkillCard
          top={postgresqlFront}
          bottom={postgresqlBack}
          desc="PostgreSQL"
          alt="PostgreSQL"
        />
      </SwiperSlide>
      {/* <SwiperSlide>
        <SkillCard
          top={mysqlFront}
          bottom={mysqlBack}
          desc="MySQL"
          alt="MySQL"
        />
      </SwiperSlide> */}


    </Swiper>
  );
};

export default SkillBE;
