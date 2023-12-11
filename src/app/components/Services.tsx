import React from "react";
import Image from "next/image";
import Line from "../../../public/assets/Line 2.png";
import Qaida from "../../../public/assets/qaida.jpg";
import Nazra from "../../../public/assets/nazra.jpg";
import Hifaz from "../../../public/assets/hifiz.jpg";
import Tajweed from "../../../public/assets/quranandtajweed.jpg";
import Link from "next/link";
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
            <Link
              href={"/services"}
              className="p-4 w-full md:w-1/2 rounded-t-[1rem] md:rounded-t-[2rem] cursor-pointer"
            >
              <div className="bg-[#FFE5A2] group hover:bg-[#544214] custom-shadow rounded-3xl md:rounded-[3rem] h-full ">
                <div className="h-full ">
                  <Image
                    className="rounded-[1.5rem] md:rounded-[3rem] w-full object-cover"
                    src={Qaida}
                    alt="Picture of the author"
                  />

                  <div className="p-9">
                    <h2 className="text-2xl md:text-[2.5rem] text-[#544214] group-hover:text-[#FFE5A2] font-bold">
                      Basic Qaida
                    </h2>
                    <p className="text-[1.25rem] mt-4 text-[#544214] group-hover:text-[#FFE5A2]">
                      This is the basic learning of quran
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/services"} className="p-4 w-full md:w-1/2">
              <div className="group bg-[#FFE5A2] hover:bg-[#544214] custom-shadow rounded-3xl md:rounded-[3rem] h-full">
                <div className="h-full">
                  <Image
                    className="rounded-[1.5rem] md:rounded-[3rem] w-full"
                    src={Nazra}
                    alt="Picture of the author"
                  />
                  <div className="p-9 ">
                    <h2 className="text-2xl md:text-[2.5rem] text-[#544214] group-hover:text-[#FFE5A2] font-bold">
                      Nazra
                    </h2>
                    <p className="text-[1.25rem] mt-4 text-[#544214] group-hover:text-[#FFE5A2]">
                      This is the basic learning of quran
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-wrap md:flex-nowrap ">
            <Link href={"/services"} className="p-4 w-full md:w-1/2 ">
              <div className="bg-[#FFE5A2] group hover:bg-[#544214] custom-shadow rounded-3xl md:rounded-[3rem] h-full">
                <div className="h-full">
                  <Image
                    className="rounded-[1.5rem] md:rounded-[3rem] w-full"
                    src={Hifaz}
                    alt="Picture of the author"
                  />
                  <div className="p-9">
                    <h2 className=" text-2xl md:text-[2.5rem] font-bold text-[#544214] text-bold group-hover:text-[#FFE5A2]">
                      Hifz-e-Quran
                    </h2>
                    <p className="text-[1.25rem] mt-4 text-[#544214] group-hover:text-[#FFE5A2]">
                      This is the memorization of quran
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/services"} className="p-4 w-full md:w-1/2  ">
              <div className="bg-[#FFE5A2] group hover:bg-[#544214] custom-shadow rounded-3xl md:rounded-[3rem] h-full">
                <div className="h-full">
                  <Image
                    className="rounded-[1.5rem] md:rounded-[3rem] w-full"
                    src={Tajweed}
                    alt="Picture of the author"
                  />
                  <div className="p-9">
                    <h2 className=" text-2xl md:text-[2.5rem] font-bold text-[#544214] text-bold group-hover:text-[#FFE5A2]">
                      Quran with Tajweed
                    </h2>
                    <p className="text-[1.25rem] mt-4 text-[#544214] group-hover:text-[#FFE5A2]">
                      These are the set of pronunciation & rules used in
                      reciting quran
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
