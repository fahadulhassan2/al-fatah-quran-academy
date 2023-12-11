import React from "react";
import Image from "next/image";
import Line from "../../../public/assets/Line 1.png";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Link from "next/link";
type Props = {};

const Register = (props: Props) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-[4rem] mx-auto">
          <div className="text-center">
            <h1 className="text-2xl md:text-[2.5rem] font-bold text-[#544214]">
              3 Easy Steps for registration
            </h1>
            <Image
              className="mx-auto my-3"
              src={Line}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-wrap  text-center">
            <div className="p-4 w-full md:w-1/3">
              <div className="h-full shadow-2xl bg-[#544214] rounded-3xl custom-shadow overflow-hidden p-6">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className=" flex justify-between items-center">
                      <h1 className="text-[#FFE5A2] text-[2rem] mb-1 font-bold">
                        Step 1
                      </h1>
                      <MdOutlineArrowRightAlt className="text-[#FFE5A2] text-[4rem]" />
                    </div>

                    <p className="font-medium text-left leading-relaxed mb-3 text-[1.25rem] text-[#FFE5A2]">
                      Go to plan and price page.
                    </p>
                  </div>
                  <Link href={"/plan-and-price"}>
                    <button className="custom-shadow w-full font-bold items-end text-center bg-[#FFE5A2] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-5">
                      Plan & Pricing
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3">
              <div className="h-full bg-[#FFE5A2] rounded-3xl custom-shadow overflow-hidden p-6">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className=" flex justify-between items-center">
                      <h1 className="text-[#544214] text-[2rem] mb-1 font-bold">
                        Step 2
                      </h1>
                      <MdOutlineArrowRightAlt className="text-[#544214] text-[4rem]" />
                    </div>

                    <p className="font-medium text-left leading-relaxed mb-3 text-[1.25rem] text-[#544214]">
                      Select the plan and click on order button.
                    </p>
                  </div>
                  <Link href={"/resgister-with-us"}>
                    <button className="custom-shadow w-full font-semibold text-center bg-[#544214] border-0 py-2 px-4 focus:outline-none hover:bg-[#544214] rounded-full text-[#FFE5A2] mt-5 ">
                      Register with us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/3">
              <div className="h-full bg-[#544214] rounded-3xl custom-shadow overflow-hidden p-6">
                <div className="flex flex-col">
                  <div>
                    <div className=" flex justify-between items-center">
                      <h1 className="text-[#FFE5A2] text-[2rem] mb-1 font-bold">
                        Step 3
                      </h1>
                      <MdOutlineArrowRightAlt className="text-[#FFE5A2] text-[4rem]" />
                    </div>

                    <p className="font-medium text-left leading-relaxed mb-3 text-[1.25rem] text-[#FFE5A2]">
                      Now your redirected to the register with us.
                    </p>
                  </div>
                  <Link href={"https://wa.me/+9230947583?"} target="_blank">
                    <button className="custom-shadow w-full font-semibold text-center bg-[#FFE5A2] border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-full text-[#544214] mt-5 ">
                      Whats app Chat
                    </button>
                  </Link>
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
