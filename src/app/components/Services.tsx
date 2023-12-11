import React from "react";
import Image from "next/image";
import Line from "../../../public/assets/Line 2.png";
import Qaida from "../../../public/assets/qaida.jpg";
import Nazra from "../../../public/assets/nazra.jpg";
import Hifaz from "../../../public/assets/hifiz.jpg";
import Tajweed from "../../../public/assets/quranandtajweed.jpg";
type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-[4rem] mx-auto">
          <div className="text-center">
            <h1 className="text-2xl md:text-[2.5rem] font-bold text-[#544214]">
              Services
            </h1>
            <Image
              className="mx-auto my-3"
              src={Line}
              alt="Picture of the author"
            />
          </div>
          <div className="flex flex-wrap md:flex-nowrap py-5 ">
            <div className="p-4 w-full md:w-1/2 rounded-t-[2rem]">
              <div className="bg-[#FFE5A2] custom-shadow rounded-[3rem] h-full">
                <div className="h-full ">
                  <Image
                    className="rounded-[3rem]  w-full object-cover"
                    src={Qaida}
                    alt="Picture of the author"
                  />

                  <div className="p-9">
                    <h2 className="text-2xl md:text-[2.5rem]  text-[#544214] font-bold">
                      Basic Qaida
                    </h2>
                    <p className="text-[1.25rem] mt-4 text-[#544214]">
                      This is the basic learning of quran
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/2">
              <div className="bg-[#FFE5A2] custom-shadow  rounded-[3rem] h-full">
                <div className="h-full">
                  <Image
                    className="rounded-[3rem] w-full"
                    src={Nazra}
                    alt="Picture of the author"
                  />
                  <div className="p-9">
                    <h2 className="text-2xl md:text-[2.5rem] text-[#544214] font-bold">
                      Nazra
                    </h2>
                    <p className="text-[1.25rem] mt-4 text-[#544214]">
                      This is the basic learning of quran
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap ">
            <div className="p-4 w-full md:w-1/2 ">
              <div className="bg-[#FFE5A2] custom-shadow rounded-[3rem] h-full">
                <div className="h-full">
                  <Image
                    className="rounded-[3rem] w-full"
                    src={Hifaz}
                    alt="Picture of the author"
                  />
                  <div className="p-9">
                    <h2 className=" text-2xl md:text-[2.5rem] font-bold text-[#544214] text-bold">
                      Hifz-e-Quran
                    </h2>
                    <p className="text-[1.25rem] mt-4 text-[#544214]">
                      This is the memorization of quran
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 w-full md:w-1/2  ">
              <div className="bg-[#FFE5A2] custom-shadow rounded-[3rem] h-full">
                <div className="h-full">
                  <Image
                    className="rounded-[3rem] w-full"
                    src={Tajweed}
                    alt="Picture of the author"
                  />
                  <div className="p-9">
                    <h2 className=" text-2xl md:text-[2.5rem] font-bold text-[#544214] text-bold">
                      Quran with Tajweed
                    </h2>
                    <p className="text-[1.25rem] mt-4 text-[#544214]">
                      These are the set of pronunciation & rules used in
                      reciting quran
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
