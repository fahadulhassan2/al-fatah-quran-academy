import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/Asset_3.png";
type Props = {};

const Navbar = (props: Props) => {
  // let nav = false;
  // let two = nav ? <div>Navbar1</div> : <div>Navba2</div>;

  return (
    <header className=" body-font bg-[#544214] text-[#FFE5A2]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
  <Image className="w-[17em] cursor-pointer" src={logo} alt="Picture of the author" />
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:block  hidden ">
      <a className="mr-10 cursor-pointer hover:text-[#FFFBF2]">Home</a>
      <a className="mr-10 cursor-pointer hover:text-[#FFFBF2]">Services</a>
      <a className="mr-10 cursor-pointer hover:text-[#FFFBF2]">Plan & Pricing</a>
      <a className="mr-10 cursor-pointer hover:text-[#FFFBF2]">About Us</a>
    </nav>
    <button className=" md:block  hidden inline-flex items-center bg-[#FFE5A2] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-4 md:mt-0">Register</button>
  </div>
</header>
  );
};

export default Navbar;
