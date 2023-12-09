import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaSkype } from "react-icons/fa";
import FooterLogo from "../../../public/assets/Asset_3.png"
type Props = {};

const Footer = (Props: Props) => {
  return (
    <footer className="text-gray-600 body-font bg-[#544214]">
      <div className="container px-5 py-[3rem] mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <Image className="mb-3" src={FooterLogo} alt="Picture of the author" />
              <p className="text-[#FFE5A2] text-[1rem]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia totam aliquam ratione vitae provident nesciunt facere quae dolores, quasi natus.</p>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font  text-[#FFE5A2] font-bold text-[1.5rem] md:text-[2rem] tracking-widest mb-1 md:mb-3">Quick Links</h2>
            <nav className="list-none mb-10">
              <li className="my-2">
                <a className="text-[#FFE5A2] cursor-pointer hover:text-[#FFFBF2] my-3">Home</a>
              </li>
              <li className="my-2">
                <a className="text-[#FFE5A2] cursor-pointer hover:text-[#FFFBF2] py-8">Services</a>
              </li>
              <li className="my-2">
                <a className="text-[#FFE5A2] cursor-pointer hover:text-[#FFFBF2] my-3">Plan & Pricing</a>
              </li>
              <li className="my-2">
                <a className="text-[#FFE5A2] cursor-pointer hover:text-[#FFFBF2] my-3">About Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font text-[#FFE5A2] font-bold text-[1.5rem] md:text-[2rem] mb-1 md:mb-3">Contact Info</h2>
            <div className="py-2 md:py-4 text-center md:text-left">
              <div className="flex justify-center py-2 md:justify-start text-[#FFE5A2]">
              <MdEmail />                
                <span className="text-[#FFE5A2]  px-2">alfatahquranacadmy@gmail.com</span>
              </div>
              <div className="flex justify-center py-2 md:justify-start text-[#FFE5A2]">
              <IoCall />
                <span className="text-[#FFE5A2] px-2">+92 30947583</span>
              </div>
              <div className="flex justify-center py-2 md:justify-start text-[#FFE5A2] ">
              <FaSkype />
                <span className="text-[#FFE5A2] px-2">+92 30947583</span>
              </div>
            </div>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 md:mt-4 justify-center sm:justify-start pt-5">
              <a className="text-[#FFE5A2] ">
              <FaFacebook className="text-[2rem]"/>
              </a>
              <a className="ml-3 text-[#FFE5A2]">
              <AiFillInstagram className="text-[2rem]"/>
              </a>
              <a className="ml-3 text-[#FFE5A2]">
              <FaLinkedin className="text-[2rem]"/>
              </a>
              <a className="ml-3 text-[#FFE5A2]">
              <IoLogoWhatsapp className="text-[2rem]"/>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#FFE5A2]" >
        <div className="container px-5 py-5 mx-auto">
          <p className="text-[#FFE5A2] text-[1.25rem] font-bold text-center md:text-left ">Copyright © 2023 Al-Fatah Quran Academy. All Rights Reserved </p>
        </div>
      </div>
    </footer>
  )
};




export default Footer;
