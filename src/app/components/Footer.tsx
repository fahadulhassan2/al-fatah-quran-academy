"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaSkype } from "react-icons/fa";
import FooterLogo from "../../../public/assets/Asset_3.png";
type Props = {};

const Footer = (Props: Props) => {
  return (
    <footer className="text-gray-600 body-font bg-[#544214]">
      <div className="container px-5 py-[3rem] mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <Image
              className="mb-3"
              src={FooterLogo}
              alt="Picture of the author"
            />
            <p className="text-[#FFE5A2] text-[1rem]">
              We built the Al Fatah Quran Academy website to make learning about
              the Quran easy for everyone. Our goal is to connect people
              worldwide with the teachings of the Quran using an online
              platform, embracing both technology and spiritual education. This
              website reflects our dedication to providing accessible and
              valuable religious knowledge globally
            </p>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-[#FFE5A2] font-bold text-[1.5rem] md:text-[2rem] tracking-widest mb-1 md:mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li className="my-2">
                <Link
                  href={"/"}
                  className="text-[#FFE5A2] cursor-pointer hover:text-[#FFFBF2] my-3"
                >
                  Home
                </Link>
              </li>
              {/* <li className="my-2">
                <Link
                  href={"/"}
                  className="text-[#FFE5A2] cursor-pointer hover:text-[#FFFBF2] my-3"
                >
                  Home
                </Link>
              </li> */}
              <li className="my-2">
                <Link
                  href={"/services"}
                  className="text-[#FFE5A2] cursor-pointer hover:text-[#FFFBF2] py-8"
                >
                  Services
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href={"/plan-and-price"}
                  className="text-[#FFE5A2] cursor-pointer hover:text-[#FFFBF2] my-3"
                >
                  Plan & Pricing
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href={"/about-us"}
                  className="text-[#FFE5A2] cursor-pointer hover:text-[#FFFBF2] my-3"
                >
                  About Us
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font text-[#FFE5A2] font-bold text-[1.5rem] md:text-[2rem] mb-1 md:mb-3">
              Contact Info
            </h2>
            <div className="py-2 md:py-4 text-center md:text-left">
              <div className="flex justify-center items-center py-2 md:justify-start text-[#FFE5A2]">
                <a
                  className="group flex justify-center items-center"
                  href="mailto:alfatahquranacadmy@gmail.com"
                  target="_blank"
                >
                  <MdEmail className="custom-shadow text-2xl group-hover:text-[#ffe5a296]" />
                  <span className="text-[#FFE5A2] group-hover:text-[#ffe5a296] px-2">
                    alfatahquranacadmy@gmail.com
                  </span>
                </a>
              </div>
              <div className="flex justify-center items-center py-2 md:justify-start text-[#FFE5A2]">
                <a
                  className="group flex justify-center items-center"
                  href="tel:+9230947583"
                >
                  <IoCall className="custom-shadow text-2xl group-hover:text-[#ffe5a296]" />
                  <span className="text-[#FFE5A2] px-2 group-hover:text-[#ffe5a296]">
                    +923460511514
                  </span>
                </a>
              </div>
              <div className="flex justify-center items-center py-2 md:justify-start text-[#FFE5A2] ">
                <a
                  className="group flex justify-center items-center"
                  href="skype:+923460511514"
                >
                  <FaSkype className="custom-shadow text-2xl group-hover:text-[#ffe5a296]" />
                  <span className="text-[#FFE5A2] px-2 group-hover:text-[#ffe5a296]">
                    +923460511514
                  </span>
                </a>
              </div>
            </div>
            <span className="inline-flex gap-2 sm:ml-auto sm:mt-0 md:mt-2 justify-center sm:justify-start pt-5">
              <a className="text-[#FFE5A2] ">
                <FaFacebook className="custom-shadow text-4xl hover:text-[#ffe5a296] cursor-pointer" />
              </a>
              <a className="ml-3 text-[#FFE5A2]">
                <AiFillInstagram className="custom-shadow text-4xl hover:text-[#ffe5a296] cursor-pointer" />
              </a>
              <a className="ml-3 text-[#FFE5A2]">
                <FaLinkedin className="custom-shadow text-4xl hover:text-[#ffe5a296] cursor-pointer" />
              </a>
              <Link
                href={"https://wa.me/+923460511514?"}
                target="_blank"
                className="ml-3 text-[#FFE5A2]"
              >
                <IoLogoWhatsapp className="custom-shadow text-4xl hover:text-[#ffe5a296] cursor-pointer" />
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#FFE5A2]">
        <div className="container px-5 py-5 mx-auto">
          <p className="text-[#FFE5A2] font-bold text-center  ">
            Copyright © 2023 Al-Fatah Quran Academy. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
