import React from "react";
import Image from "next/image";
import Line from "../../../public/assets/Line 1.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
type Props = {};

const Register = (props: Props) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-[1.3rem] md:text-[2.5rem] w-full font-bold text-[#544214]">
            3 Easy Steps for registration
          </h1>
          <Image src={Line} alt="Picture of the author" />
          <div className="flex flex-wrap  text-center">
            <div className="p-4 w-full md:w-1/3">
              <div className="h-full  bg-[#544214] rounded-lg overflow-hidden p-6">
                <div className="">
                  <div className=" flex justify-between">
                    <h1 className="text-[#FFE5A2] text-[2rem] mb-1 font-bold">
                      Setup
                    </h1>
                    <MdOutlineArrowRightAlt className="text-[#FFE5A2] text-[4rem]" />
                    {/* <svg className="w-6 h-6 text-[#FFE5A2] dark:text-[#FFE5A2]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg> */}
                  </div>

                  <p className="text-left leading-relaxed mb-3 text-[1.25rem] text-[#FFE5A2]">
                    Go to plan and price page.
                  </p>

                  <button className=" items-end text-center bg-[#FFE5A2] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214]  mt-5 ">
                    Plan & Pricing
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3">
              <div className="h-full bg-[#FFE5A2] rounded-lg overflow-hidden p-6">
                <div className="">
                  <div className=" flex justify-between">
                    <h1 className="text-[#544214] text-[2rem] mb-1 font-bold">
                      Setup
                    </h1>
                    <MdOutlineArrowRightAlt className="text-[#544214] text-[4rem]" />
                    {/* <svg className="w-6 h-6 text-[#544214] dark:text-[#544214]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg> */}
                  </div>

                  <p className="text-left leading-relaxed mb-3 text-[1.25rem] text-[#544214]">
                    Select the plan and click on order button.
                  </p>

                  <button className="text-center bg-[#544214] border-0 py-1 px-3 focus:outline-none  rounded-full text-[#FFE5A2] mt-5 ">
                    Register with us{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3">
              <div className="h-full bg-[#544214] rounded-lg overflow-hidden p-6">
                <div className="">
                  <div className=" flex justify-between">
                    <h1 className="text-[#FFE5A2] text-[2rem] mb-1 font-bold">
                      Setup
                    </h1>
                    <MdOutlineArrowRightAlt className="text-[#FFE5A2] text-[4rem]" />

                    {/* <svg className="w-6 h-6 text-[#FFE5A2] dark:text-[#FFE5A2]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg> */}
                  </div>

                  <p className="text-left leading-relaxed mb-3 text-[1.25rem] text-[#FFE5A2]">
                    Now your redirected to the register with us page.
                  </p>

                  <button className="text-center bg-[#FFE5A2] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-5 ">
                    Whats app Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
