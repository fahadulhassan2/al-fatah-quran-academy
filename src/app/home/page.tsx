"use client";
import React from "react";
import Register from "../components/register";
import Services from "../components/Services";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Register />
      <Services />
    </>
  );
};

export default Page;
