{
  /* <Image classNameNameName="w-full" src={HeaderImg} alt="Picture of the author"/> */
}
import React from "react";
import Image from "next/image";
import HeaderImg from "../../../public/assets/header.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
type Props = {};

const Header = (props: Props) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <Image className="w-full" src={HeaderImg} alt="Picture of the author" />{" "}
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
};

export default Header;
