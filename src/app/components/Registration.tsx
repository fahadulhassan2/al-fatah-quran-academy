"use client";
import React from "react";
import Image from "next/image";
import Line from "../../../public/assets/Line-3.png";
import Logo from "../../../public/assets/Brown.png";
import { useForm, ValidationError } from "@formspree/react";
import Thanks from "./Thanks";
type Props = {};
const Registration = (props: Props) => {
  const [state, handleSubmit] = useForm("xnqkeowk");
  if (state.succeeded) {
    return <Thanks />;
  }

  return (
    <div>
      <div p-3>
        <section className="body-font relative">
          <div className="container px-5 py-[4rem] mx-auto">
            <div className="text-center">
              <h1 className="text-2xl md:text-[2.5rem] font-bold text-[#544214]">
                Register With Us
              </h1>
              <Image
                className="mx-auto my-3"
                src={Line}
                alt="Picture of the author"
              />
            </div>
            <p className="text-[#1E1E1E] font-bold pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quidem incidunt ratione. Aliquam deleniti harum est, architecto
              praesentium sed voluptates quis consectetur cupiditate
              repudiandae, modi nesciunt illum rerum voluptas consequatur!
            </p>
            <div className="bg-[#544214] custom-shadow mt-[5rem] rounded-[2rem] px-5 py-24">
              <div className="lg:w-4/5 custom-shadow bg-[#FFE5A2] rounded-[2rem] md:w-2/3 mx-auto p-3 md:p-10 md:px-14 md:mt-[-9.5rem]">
                <div className="mx-auto w-full md:w-[50%] lg:w-[25%] ">
                  <Image
                    className="mx-auto w-full my-3"
                    src={Logo}
                    alt="logo not found"
                  />
                </div>
                <h1 className="sm:text-3xl text-2xl font-bold title-font my-4 text-center text-[#544214]">
                  Register Now
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-wrap m-2">
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label className="leading-7 text-sm text-[#544214]">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="rounded-lg custom-shadow w-full bg-[#FFFBF2] bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label className="leading-7 text-sm text-[#544214]">
                        Phone number
                      </label>
                      <input
                        type="text"
                        id="number"
                        name="number"
                        required
                        className="rounded-lg custom-shadow w-full bg-[#FFFBF2] bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      <ValidationError
                        prefix="Number"
                        field="number"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full ">
                    <div className="relative">
                      <label className="leading-7 text-sm text-[#544214]">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="rounded-lg custom-shadow w-full bg-[#FFFBF2] bg-opacity-50 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label className="leading-7 text-sm text-[#544214]">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        className="rounded-lg custom-shadow w-full bg-[#FFFBF2] bg-opacity-50 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full mt-6">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="custom-shadow flex mx-auto rounded-full text-[#FFE5A2] bg-[#544214] border-0 py-2 px-8 focus:outline-none hover:bg-[#FFFBF2] hover:text-[#544214] text-lg"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration;
