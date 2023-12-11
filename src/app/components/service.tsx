import React from "react";
import Image from "next/image";
import Line from "../../../public/assets/Line 2.png";
import Qaida from "../../../public/assets/qaida.jpg";
import Nazra from "../../../public/assets/nazra.jpg";
import Hifaz from "../../../public/assets/hifiz.jpg";
import Tajweed from "../../../public/assets/quranandtajweed.jpg";
import { FaCircle } from "react-icons/fa";
type Props = {};

const ServicePage = (props: Props) => {
  return (
    <div>
      <div className="container py-[4rem] mx-auto">
        <div className="text-center">
          <h1 className="text-[2.5rem] font-bold text-[#544214]">Services</h1>
          <Image className="mx-auto" src={Line} alt="Picture of the author" />
        </div>
        <p className="text-[#1E1E1E] font-bold pt-5"></p>

        <section className="text-[#000000] text-[1rem] md:text-[1.3rem] font-bold body-font my-[1rem]">
          <div className="flex justify-between rounded-[2rem] md:flex-row flex-col items-center m-[1rem] custom-shadow bg-[#FFE5A2]">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-vh">
              <Image
                className="rounded-[2rem] custom-shadow w-full md:w-[26rem] object-cover md:h-[25rem] "
                src={Qaida}
                alt="Picture of the author"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center  md:first-line p-2 md:pl-[3rem] ">
              <h1 className="text-[#544214] my-2 font-extrabold text-[2rem]">
                Basic Qaidah
              </h1>
              <div className=" text-[#544214]">
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Basic Quranic Recitation: Fundamental lessons on correctly
                    pronouncing Arabic letters and basic Quranic verses.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Tajweed Rules:Instruction on proper Quranic recitation,
                    including rules of pronunciation and intonation.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Memorization Techniques:Guidance on memorizing selected
                    Quranic verses or chapters (Surahs).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between rounded-[2rem] md:flex-row flex-col items-center m-[1rem] custom-shadow bg-[#FFE5A2]">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-vh">
              <Image
                className="rounded-[2rem] custom-shadow w-full md:w-[26rem] object-cover md:h-[25rem] "
                src={Nazra}
                alt="Picture of the author"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center  md:first-line p-2 md:pl-[3rem] ">
              <h1 className="text-[#544214] my-2 font-extrabold text-[2rem]">
                Nazra
              </h1>
              <div className=" text-[#544214]">
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Definition: Nazra refers to the basic recitation of the
                    Quran, focusing on reading and pronouncing the verses
                    accurately.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Letter Recognition:Emphasis on correctly recognizing and
                    pronouncing Arabic letters, as a foundation for reading the
                    Quran.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Word Pronunciation:Learning to pronounce Quranic words
                    accurately, paying attention to the correct articulation of
                    each word.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Phonetics and Tajweed:Introduction to basic phonetics and
                    Tajweed rules to enhance the beauty and correctness of
                    Quranic recitation.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Fluency:Developing the ability to recite Quranic verses with
                    fluency, understanding, and proper pacing.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Memorization Support: While not the primary focus, Nazra may
                    include elements that support the memorization of selected
                    verses or chapters.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Spiritual Connection: Fostering a spiritual connection with
                    the Quran through the recitation of its verses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between rounded-[2rem] md:flex-row flex-col items-center m-[1rem] custom-shadow bg-[#FFE5A2]">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-vh">
              <Image
                className="rounded-[2rem] custom-shadow w-full md:w-[26rem] object-cover md:h-[25rem] "
                src={Hifaz}
                alt="Picture of the author"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center  md:first-line p-2 md:pl-[3rem] ">
              <h1 className="text-[#544214] my-2 font-extrabold text-[2rem]">
                Hifz-e-Quran
              </h1>
              <div className=" text-[#544214]">
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Significance: It holds great importance in Islamic culture
                    and is seen as a noble spiritual accomplishment.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Participants: Individuals who complete this memorization are
                    known as Hafiz (male) or Hafiza (female).
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Educational Endeavor:Often undertaken by children, Hifz
                    involves repetitive recitation, memorization, and
                    understanding of the Quranic verses.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Spiritual Reward: Memorizing the Quran is believed to bring
                    spiritual benefits and blessings to the individual.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Linguistic Mastery: Hafiz not only memorizes the text but
                    also develops proficiency in the pronunciation and rules of
                    Tajweed (proper Quranic recitation).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between rounded-[2rem] md:flex-row flex-col items-center m-[1rem] custom-shadow bg-[#FFE5A2]">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-vh">
              <Image
                className="rounded-[2rem] custom-shadow w-full md:w-[26rem] object-cover md:h-[25rem] "
                src={Tajweed}
                alt="Picture of the author"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center  md:first-line p-2 md:pl-[3rem] ">
              <h1 className="text-[#544214] my-2 font-extrabold text-[2rem]">
                Quran with tajweed
              </h1>
              <div className=" text-[#544214]">
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Definition: Tajweed is the set of rules governing the
                    correct pronunciation and articulation of the Arabic letters
                    while reciting the Quran.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Quranic Accuracy:Tajweed ensures the accurate recitation of
                    the Quran, preserving the linguistic and phonetic integrity
                    of the verses.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    It involves rules related to proper pronunciation and
                    characteristics unique to Arabic phonetics.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Spiritual Importance: Reciting the Quran with Tajweed is
                    considered spiritually significant, as it reflects respect
                    for the sacred text.
                  </p>
                </div>
                <div className="mt-1 flex gap-2 flex-row">
                  <div className="mt-1 text-[0.5rem]">
                    <FaCircle />
                  </div>
                  <p className="text-sm">
                    Avoidance of Mistakes:Tajweed helps prevent
                    mispronunciations that may alter the meaning of the verses,
                    providing a precise understanding of the text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
