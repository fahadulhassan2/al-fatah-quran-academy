import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/Asset_3.png";
type Props = {};

const Navbar = (props: Props) => {
  // let nav = false;
  // let two = nav ? <div>Navbar1</div> : <div>Navba2</div>;

  return (
    <header className=" body-font bg-[#544214] text-[#FFE5A2]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"}>
          <Image
            className="w-[17em] cursor-pointer"
            src={logo}
            alt="Picture of the author"
          />
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:block hidden ">
          <Link
            href={"/"}
            className="mr-10 cursor-pointer hover:text-[#FFFBF2]"
          >
            Home
          </Link>
          <Link
            href={"/services"}
            className="mr-10 cursor-pointer hover:text-[#FFFBF2]"
          >
            Services
          </Link>
          <Link
            href={"/plan-and-price"}
            className="mr-10 cursor-pointer hover:text-[#FFFBF2]"
          >
            Plan & Pricing
          </Link>
          <Link
            href={"/about-us"}
            className="mr-10 cursor-pointer hover:text-[#FFFBF2]"
          >
            About Us
          </Link>
        </nav>
        <Link href={"/resgister-with-us"}>
          <button className=" md:block  hidden inline-flex items-center bg-[#FFE5A2] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-4 md:mt-0">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
