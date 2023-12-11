import React from "react";
import Image from "next/image";
import Line from "../../../public/assets/Line 2.png";
import Qaida from "../../../public/assets/qaida.jpg";
import Nazra from "../../../public/assets/nazra.jpg";
import Hifaz from "../../../public/assets/hifiz.jpg";
import Tajweed from "../../../public/assets/quranandtajweed.jpg";
type Props = {};

const ServicePage = (props: Props) => {
  return (
    <div>
      <div className="container px-5 py-[4rem] mx-auto">
        <div className="text-center">
          <h1 className="text-[2.5rem] font-bold text-[#544214]">Services</h1>
          <Image className="mx-auto" src={Line} alt="Picture of the author" />
        </div>
        <p className="text-[#1E1E1E] font-bold pt-5"></p>

        <section className="text-[#000000] text-[1rem] md:text-[1.3rem] font-bold body-font my-[1rem]">
          <div className="flex justify-between rounded-[2rem] md:flex-row flex-col items-center m-[1rem]  bg-[#FFE5A2]">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-vh">
              <Image
                className="rounded-[2rem] w-[26rem] h-25rem md:h-full "
                src={Qaida}
                alt="Picture of the author"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center  md:first-line p-2 md:pl-[3rem]">
              <h1 className="text-[#544214] text-[1rem] md:text-[1.5rem]">
                Basic Qaidah
              </h1>
              <ul className="text-[#544214] text-[0.875rem] pl-2">
                <li className="list-disc">
                  Basic Quranic Recitation: Fundamental lessons on correctly
                  pronouncing Arabic letters and basic Quranic verses.
                </li>
                <li className="list-disc">
                  Tajweed Rules:Instruction on proper Quranic recitation,
                  including rules of pronunciation and intonation.
                </li>
                <li className="list-disc">
                  Memorization Techniques:Guidance on memorizing selected
                  Quranic verses or chapters (Surahs).
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between rounded-[2rem] md:flex-row flex-col items-center m-[1rem]  bg-[#FFE5A2]">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-vh">
              <Image
                className="rounded-[2rem] w-[25rem] h-full"
                src={Nazra}
                alt="Picture of the author"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left md:first-line  md:pl-[3rem] p-1">
              <h1 className="text-[#544214] text-[1rem] md:text-[1.5rem]">
                {" "}
                Nazra
              </h1>
              <ul className="text-[#544214] text-[0.875rem] pl-2">
                <li className="list-disc">
                  Definition: Nazra refers to the basic recitation of the Quran,
                  focusing on reading and pronouncing the verses accurately.
                </li>
                <li className="list-disc">
                  Letter Recognition:Emphasis on correctly recognizing and
                  pronouncing Arabic letters, as a foundation for reading the
                  Quran.
                </li>
                {/* <li>3. Word Pronunciation:Learning to pronounce Quranic words accurately, paying attention to the correct articulation of each word.</li>
                <li className="list-disc">4. Phonetics and Tajweed:Introduction to basic phonetics and Tajweed rules to enhance the beauty and correctness of Quranic recitation.</li>
                <li className="list-disc">5. Fluency:Developing the ability to recite Quranic verses with fluency, understanding, and proper pacing.</li>
                <li className="list-disc">6. Memorization Support: While not the primary focus, Nazra may include elements that support the memorization of selected verses or chapters.</li>
                <li className="list-disc">7. Spiritual Connection: Fostering a spiritual connection with the Quran through the recitation of its verses.</li>
                <p>Remember, Nazra is foundational and essential for progressing to more advanced levels of quranic studies.</p> */}
              </ul>
            </div>
          </div>
          <div className="flex justify-between rounded-[2rem] md:flex-row flex-col items-center m-[1rem]  bg-[#FFE5A2]">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-vh">
              <Image
                className="rounded-[2rem] w-[25rem] h-full"
                src={Hifaz}
                alt="Picture of the author"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center  md:first-line p-2 md:pl-[3rem]">
              <h1 className="text-[#544214] text-[1rem] md:text-[1.5rem]">
                Hifz-e-Quran
              </h1>
              <ul className="text-[#544214] text-[0.875rem] pl-2">
                <li className="list-disc">
                  Definition: Hifz-e-Quran is the memorization of the entire
                  Quran.
                </li>
                <li className="list-disc">
                  Significance: It holds great importance in Islamic culture and
                  is seen as a noble spiritual accomplishment.
                </li>
                {/* <li className="list-disc">Participants: Individuals who complete this memorization are known as Hafiz (male) or Hafiza (female).</li>
                <li className="list-disc">Educational Endeavor:Often undertaken by children, Hifz involves repetitive recitation, memorization, and understanding of the Quranic verses.</li>
                <li className="list-disc">- Spiritual Reward: Memorizing the Quran is believed to bring spiritual benefits and blessings to the individual.</li>
                <li className="list-disc">Linguistic Mastery: Hafiz not only memorizes the text but also develops proficiency in the pronunciation and rules of Tajweed (proper Quranic recitation).
</li> */}
              </ul>
            </div>
          </div>
          <div className="flex justify-between rounded-[2rem] md:flex-row flex-col items-center m-[1rem]  bg-[#FFE5A2]">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full h-vh">
              <Image
                className="rounded-[2rem] w-[25rem] h-full"
                src={Tajweed}
                alt="Picture of the author"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center  md:first-line  md:pl-[3rem]">
              <h1 className="text-[#544214] text-[1rem] md:text-[1.5rem]">
                Quran with tajweed
              </h1>
              <ul className="text-[#544214] text-[0.875rem] pl-2">
                <li className="list-disc">
                  {" "}
                  Definition: Tajweed is the set of rules governing the correct
                  pronunciation and articulation of the Arabic letters while
                  reciting the Quran.
                </li>
                <li className="list-disc">
                  {" "}
                  Quranic Accuracy:Tajweed ensures the accurate recitation of
                  the Quran, preserving the linguistic and phonetic integrity of
                  the verses.
                </li>
              </ul>
              {/* <h2>Phonetic Rules</h2> */}
              {/* <ul>
              <li className="list-disc">It involves rules related to proper pronunciation and characteristics unique to Arabic phonetics.</li>
              <li className="list-disc"> Spiritual Importance: Reciting the Quran with Tajweed is considered spiritually significant, as it reflects respect for the sacred text.</li>
              <li  className="list-disc">Avoidance of Mistakes:Tajweed helps prevent mispronunciations that may alter the meaning of the verses, providing a precise understanding of the text.</li>
              </ul> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
