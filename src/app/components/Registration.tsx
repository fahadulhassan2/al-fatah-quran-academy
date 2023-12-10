import React from "react";
import Image from "next/image";
import Line from "../../../public/assets/Line-3.png";
type Props = {};
const Registration = (props: Props) => {
  // let nav = false;
  // let two = nav ? <div>Navbar1</div> : <div>Navba2</div>;

  return (
    <div>
      <div p-3>
        <section className="body-font relative">
          <div className="container px-5 py-[4rem] mx-auto">
            <h1 className="text-[#544214] text-[2.5rem] font-bold">
              Register With us
            </h1>
            <Image src={Line} alt="Picture of the author" />
            <p className="text-[#1E1E1E] font-bold pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quidem incidunt ratione. Aliquam deleniti harum est, architecto
              praesentium sed voluptates quis consectetur cupiditate
              repudiandae, modi nesciunt illum rerum voluptas consequatur!
            </p>
            <div className="bg-[#544214] mt-[5rem] rounded-[2rem] px-5 py-24">
              <div className="lg:w-4/5 bg-[#FFE5A2] rounded-[2rem] md:w-2/3 mx-auto p-3 md:p-10 md:px-14 md:mt-[-9.5rem]">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-center text-[#544214]">
                  Register Now
                </h1>
                <div className="flex flex-wrap m-2">
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label className="leading-7 text-sm text-[#544214]">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-[#FFFBF2] bg-opacity-50 rounded border focus:border-indigo-500 focus:bg-[#FFFBF2] focus:ring-2 focus:ring-[#544214] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full md:w-1/2">
                    <div className="relative">
                      <label className="leading-7 text-sm text-[#544214]">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-[#FFFBF2] bg-opacity-50 rounded border  focus:border-[#544214] focus:bg-[#FFFBF2] focus:ring-2 focus:ring-[#544214] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                        className="w-full bg-[#FFFBF2] bg-opacity-50 rounded border  focus:border-[#544214] focus:bg-white focus:ring-2 focus:ring-[#544214] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto rounded-full text-[#FFE5A2] bg-[#544214] border-0 py-2 px-8 focus:outline-none hover:bg-[#FFFBF2] hover:text-[#544214] text-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration;
