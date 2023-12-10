import React from "react";

import { Metadata } from "next";
import ServicePage from "../components/service";

type Props = {};
export const metadata: Metadata = {
  title: "Al Fatah Quran Academy | Services",
  description: "Generated by create next app",
};
const Page = (props: Props) => {
  return (
    <>
      <ServicePage />
    </>
  );
};

export default Page;
