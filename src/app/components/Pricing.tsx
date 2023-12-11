import React from "react";
import Image from "next/image";
import PriceImg from "../../../public/assets/price-line.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import Link from "next/link";

type Props = {};

const Pricing = (props: Props) => {
  return (
    <section className=" body-font overflow-hidden">
      <div className="container px-5 pt-[4rem] mx-auto">
        <div className="flex flex-col w-full mb-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-[2.5rem] font-bold text-[#544214]">
              Plan and pricing
            </h1>
            <Image
              className="mx-auto my-3"
              src={PriceImg}
              alt="Picture of the author"
            />
          </div>
          <p className="lg:w-2/3 leading-relaxed text-base font-bold pt-5 text-[#000000]">
            We believe in making quranic education accessible to all. Our fee
            structure is designed to be transparent and affordable, ensuring
            that in individuals from diverse background can embark on their
            quranic journey
          </p>
        </div>
        <div className="flex justify-evenly flex-wrap w-full">
          <div className="py-2 md:p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full custom-shadow rounded-[2rem] bg-[#FFE5A2]  flex flex-col relative overflow-hidden">
              <div className="bg-[#544214] text-center rounded-[2rem]">
                <h1 className="text-5xl text-[#FFE5A2] text-[2rem]  font-bold p-8 my-4 leading-none">
                  Plan A
                </h1>
              </div>
              <div className="text-center text-[#000000] pt-5">
                <h3 className="font-extrabold text-[2rem]">
                  <span className="font-bold text-[1rem]">$</span> 33
                </h3>
                <p className="font-bold">Monthly</p>
              </div>
              <div className=" m-auto  py-10">
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    2 Days / 30 Min
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    8 Classes / Month
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    Duas / Kalmas
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCircleXmark className="text-[#cd3232]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    Hifz e Quran
                  </p>
                </div>
              </div>

              <div className="text-center my-10">
                <Link href={"/resgister-with-us"}>
                  <button className="custom-shadow items-center font-bold text-[#FFE5A2] bg-[#544214] border-0 py-2 px-8 focus:outline-none hover:bg-[#FFFBF2] hover:text-[#544214] rounded-full">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-2 md:p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full custom-shadow rounded-[2rem] bg-[#FFE5A2]  flex flex-col relative overflow-hidden">
              <div className="bg-[#544214] text-center rounded-[2rem]">
                <h1 className="text-5xl text-[#FFE5A2] text-[2rem]  font-bold p-8 my-4 leading-none">
                  Plan B
                </h1>
              </div>
              <div className="text-center text-[#000000] pt-5">
                <h3 className="font-extrabold text-[2rem]">
                  <span className="font-bold text-[1rem]">$</span> 45
                </h3>
                <p className="font-bold">Monthly</p>
              </div>
              <div className=" m-auto  py-10">
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    3 Days / 30 Min
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    8 Classes / Month
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    Duas / Kalmas
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCircleXmark className="text-[#cd3232]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    Hifz e Quran
                  </p>
                </div>
              </div>

              <div className="text-center my-10">
                <Link href={"/resgister-with-us"}>
                  <button className="custom-shadow items-center font-bold text-[#FFE5A2] bg-[#544214] border-0 py-2 px-8 focus:outline-none hover:bg-[#FFFBF2] hover:text-[#544214] rounded-full">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-2 md:p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full custom-shadow rounded-[2rem] bg-[#FFE5A2]  flex flex-col relative overflow-hidden">
              <div className="bg-[#544214] text-center rounded-[2rem]">
                <h1 className="text-5xl text-[#FFE5A2] text-[2rem]  font-bold p-8 my-4 leading-none">
                  Plan C
                </h1>
              </div>
              <div className="text-center text-[#000000] pt-5">
                <h3 className="font-extrabold text-[2rem]">
                  <span className="font-bold text-[1rem]">$</span> 70
                </h3>
                <p className="font-bold">Monthly</p>
              </div>
              <div className=" m-auto  py-10">
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    5 Days / 30 Min
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    8 Classes / Month
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    Namaz / Salah / Hadith
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCircleXmark className="text-[#cd3232]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    Hifz e Quran
                  </p>
                </div>
              </div>

              <div className="text-center my-10">
                <Link href={"/resgister-with-us"}>
                  <button className="custom-shadow items-center font-bold text-[#FFE5A2] bg-[#544214] border-0 py-2 px-8 focus:outline-none hover:bg-[#FFFBF2] hover:text-[#544214] rounded-full">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="py-2 md:p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full custom-shadow rounded-[2rem] bg-[#FFE5A2]  flex flex-col relative overflow-hidden">
              <div className="bg-[#544214] text-center rounded-[2rem]">
                <h1 className="text-5xl text-[#FFE5A2] text-[2rem]  font-bold p-8 my-4 leading-none">
                  Plan D
                </h1>
              </div>
              <div className="text-center text-[#000000] pt-5">
                <h3 className="font-bold text-[1.5rem]">
                  <span className="font-bold text-[1rem]">$</span> 85
                </h3>
                <p className="font-bold">Monthly</p>
              </div>
              <div className=" m-auto  py-10">
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    5 Days / 30 Min
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    8 Classes / Month
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCheckCircle className="text-[#0cae1c]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    Namaz/Salah/Hadith
                  </p>
                </div>
                <div className="flex items-center ">
                  <FaCircleXmark className="text-[#cd3232]" />
                  <p className="pl-3 text-lg font-medium text-[#000000]">
                    Hifz e Quran
                  </p>
                </div>
              </div>

              <div className="text-center my-10">
                <button className="custom-shadow items-center font-bold text-[#FFE5A2] bg-[#544214] border-0 py-2 px-8 focus:outline-none hover:bg-[#FFFBF2] hover:text-[#544214] rounded-full">
                  Order Now
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container px-5 py-[4rem] mx-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-[2.5rem] font-bold text-[#544214]">
            Referral Program
          </h1>
          <Image
            className="mx-auto my-3"
            src={PriceImg}
            alt="Picture of the author"
          />
        </div>
        <div className=" custom-shadow rounded-[2rem] bg-[#FFE5A2] p-[2rem] md:p-[6rem] my-[2rem]">
          <p className="text-[#000000] md:text-2xl font-bold pb-7">
            Al-Fatah Online Quran Academy also offers attractive referral
            discounts to its students.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-[4rem] justify-center ">
            <div className="bg-[#544214] rounded-[1rem] md:rounded-[2rem] p-[2rem] md:p-[6rem] custom-shadow">
              <p className="text-[#FFE5A2] text-center font-bold md:text-xl">
                On one student referral you <br /> get a 15% discount.
              </p>
            </div>
            <div className="bg-[#544214] rounded-[1rem] md:rounded-[2rem] p-[2rem] md:p-[6rem] custom-shadow">
              <p className="text-[#FFE5A2] text-center font-bold md:text-xl">
                On two student referral you <br /> get a 25% discount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
