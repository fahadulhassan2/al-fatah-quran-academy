import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
type Props = {};

const Thanks = (props: Props) => {
  return (
    <div className="custom-shadow rounded-3xl bg-[#FFE5A2] py-8 md:h-[50vh] m-6">
      <div className="flex flex-col justify-center items-center h-full">
        <FaCheckCircle className="mx-auto text-4xl md:text-4xl lg:text-6xl text-[#0cae1c]" />

        <h1 className="px-2 text-[#544214] text-center my-8 md:my-10 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ">
          Successfully Submitted
        </h1>
        <p className="px-4 leading-relaxed mb-8 md:mb-10">
          your information submitted to admin kindly confirm your order via
          whatsapp chat click
        </p>
        <Link href={"https://wa.me/+9230947583?"} target="_blank">
          <button className="custom-shadow w-full font-semibold text-center bg-[#544214] border-0 py-2 px-4 focus:outline-none hover:bg-[#544214] rounded-full text-[#FFE5A2]  ">
            Whats app Chat
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
