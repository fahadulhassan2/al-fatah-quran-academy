"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/Asset_3.png";
import { IoMenu } from "react-icons/io5";
type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="sticky-navbar w-full body-font bg-[#544214] text-[#FFE5A2]">
        <div className="container mx-auto flex flex-wrap p-5 md:flex-row md:justify-between">
          <Link href={"/"}>
            <Image
              className="w-[17em] cursor-pointer"
              src={logo}
              alt="Picture of the author"
            />
          </Link>

          <nav className="md:ml-auto lg:flex flex-wrap items-center text-base justify-center  hidden ">
            <Link
              href={"/"}
              className="mr-10 font-semibold cursor-pointer hover:text-[#FFFBF2]"
            >
              Home
            </Link>
            <Link
              href={"/services"}
              className="mr-10 font-semibold cursor-pointer hover:text-[#FFFBF2]"
            >
              Services
            </Link>
            <Link
              href={"/plan-and-price"}
              className="mr-10 font-semibold cursor-pointer hover:text-[#FFFBF2]"
            >
              Plan & Pricing
            </Link>
            <Link
              href={"/about-us"}
              className="mr-10 font-semibold cursor-pointer hover:text-[#FFFBF2]"
            >
              About Us
            </Link>
            <Link className="font-semibold" href={"/resgister-with-us"}>
              <button className="custom-shadow font-semibold md:block inline-flex items-center bg-[#FFE5A2] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-4 md:mt-0">
                Register
              </button>
            </Link>
          </nav>
          <IoMenu
            onClick={() => setShowNav((val) => !val)}
            className="cursor-pointer text-xl mt-[0.5rem] sm:text-4xl flex justify-end ml-auto lg:hidden hover:bg-[#ffe5a21f] hover:rounded-md "
          />
        </div>
        {showNav ? (
          <div className="transition delay-150 duration-300 ease-in-out absolute w-full flex  border-0 border-t-2 border-[#FFE5A2] bg-[#544214] h-auto flex-col md:flex lg:hidden">
            <nav className="py-6 md:mr-auto gap-3 flex flex-col mr-auto text-left text-base  ">
              <Link
                href={"/"}
                className="ml-9 font-semibold cursor-pointer hover:text-[#FFFBF2] "
              >
                Home
              </Link>
              <Link
                href={"/services"}
                className="ml-9 font-semibold cursor-pointer hover:text-[#FFFBF2]"
              >
                Services
              </Link>
              <Link
                href={"/plan-and-price"}
                className="ml-9 font-semibold cursor-pointer hover:text-[#FFFBF2]"
              >
                Plan & Pricing
              </Link>
              <Link
                href={"/about-us"}
                className="ml-9 font-semibold cursor-pointer hover:text-[#FFFBF2]"
              >
                About Us
              </Link>
              <Link
                className="m-0 ml-9 font-semibold"
                href={"/resgister-with-us"}
              >
                <button className="custom-shadow m-0 font-semibold bg-[#FFE5A2] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] ">
                  Register
                </button>
              </Link>
            </nav>
          </div>
        ) : (
          <></>
        )}
      </header>
      <div className="w-full h-20"></div>
    </>
  );
};

export default Navbar;
