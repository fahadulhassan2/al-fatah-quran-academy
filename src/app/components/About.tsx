import React from "react";
import Image from "next/image";
import Line from "../../../public/assets/Line 2.png";
import access from "../../../public/assets/access.jpg";
import study from "../../../public/assets/study.jpg";
import quran from "../../../public/assets/quran.jpg";
import Tajweed from "../../../public/assets/tajweed.png";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="container px-5 py-[4rem] mx-auto">
      <div className="text-center">
        <h1 className="text-2xl md:text-[2.5rem] font-bold text-[#544214]">
          About Us
        </h1>
        <Image
          className="mx-auto my-3"
          src={Line}
          alt="Picture of the author"
        />
      </div>
      <p className="text-[#1E1E1E] font-bold pt-5">
        Discover the beauty of learning at Al-Fatah Online Quran Academy. We are
        here to make the teaching and understanding of the Quran much easy and
        simple, as well as strengthen your connection with Allah almighty. Join
        us in the Pursuit of Spiritual Growth and Enlightenment.
      </p>
      <section className="text-[#000000] text-[1rem] md:text-[1.3rem] font-bold body-font my-[3rem]">
        <div className="custom-shadow w-full mx-auto flex justify-between flex-col-reverse rounded-[2rem] md:flex-row items-center m-[2rem] bg-[#FFE5A2]">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-2 md:pl-[3rem]">
            <p className=" leading-relaxed">
              Al-Fatah is providing worldwide with convenient access to quranic
              education.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full ">
            <Image
              className="rounded-[2rem] w-full h-full"
              src={access}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="custom-shadow w-full mx-auto  flex justify-between rounded-[2rem] md:flex-row flex-col items-center m-[2rem] bg-[#FFE5A2]">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-full">
            <Image
              className="rounded-[2rem] w-full"
              src={study}
              alt="Picture of the author"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:first-line p-2 md:pl-[3rem]">
            <p className=" leading-relaxed ">
              We are offering flexibility in study schedules to accommodate
              diverse learning needs.
            </p>
          </div>
        </div>
        <div className="custom-shadow w-full mx-auto  flex justify-between flex-col-reverse rounded-[2rem] md:flex-row items-center m-[2rem]  bg-[#FFE5A2]">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-2 md:pl-[3rem]">
            <p className=" leading-relaxed">
              We are making sure you get high quality education by employing
              qualified quranic instructors.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-full">
            <Image
              className="rounded-[2rem] w-full"
              src={quran}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
