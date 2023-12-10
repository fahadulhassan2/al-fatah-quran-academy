"use client";
import React from "react";
import Image from "next/image";
import HeaderImg from "../../../public/assets/header.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Services from "./Services";
type Props = {};

const Header = (props: Props) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper h-screen"
    >
      <SwiperSlide>
        <div
          className="relative overflow-hidden h-[80vh] bg-cover bg-no-repeat "
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${HeaderImg.src})`,
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="text-[#544214] mt-2 mb-16 text-5xl font-bold tracking-tight md:text-4xl xl:text-7xl">
                  Al-Fatah Quran Academy
                </h1>
                <button className="font-semibold text-center bg-[#FFE5A2] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-5">
                  Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="relative overflow-hidden h-[80vh] bg-cover bg-no-repeat "
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url(${HeaderImg.src})`,
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="text-[#544214] mt-2 mb-16 text-5xl font-bold tracking-tight md:text-5xl xl:text-7xl">
                  Al-Fatah Quran Academy
                </h1>
                <button className="font-semibold text-center bg-[#FFE5A2] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-5">
                  Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
