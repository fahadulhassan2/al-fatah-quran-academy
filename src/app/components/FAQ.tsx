import React from "react";
import Image from "next/image";
// import logo from "../../../public/assets/Asset_3.png";
import Line from "../../../public/assets/Line 2.png";
type Props = {};

const FAQ = (props: Props) => {
  return (
    <section className="text-[#544214] w-full">
      <div className="container flex flex-col justify-center px-2 py-4 mx-auto md:p-8">
        <div className="mx-auto text-center">
          <h1 className="text-2xl md:text-[2.5rem] font-bold text-[#544214]">
            Frequently Asked Questions
          </h1>
          <Image
            className="mx-auto my-3"
            src={Line}
            alt="Picture of the author"
          />
        </div>
        <div className="grid bg-[#FFE5A2] rounded-3xl text-[#544214] custom-shadow gap-8 grid-cols-1 md:gap-8 md:grid-cols-2 p-8">
          <div className="">
            <h3 className="font-semibold">
              1. What is the primary focus of Al Fatah quran academy?
            </h3>
            <p className="mt-1">
              The primary focus of Al fatah Quran Academy is to provide
              comprehensive online education in Quranic studies, including the
              memorization (Hifz) and understanding of the Quran.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              2. How does the academy ensure qualified instructors for Quranic
              teaching?
            </h3>
            <p className="mt-1">
              Instructors at Al Fatah Online Quran Academy are selected based on
              their expertise in Quranic studies and Islamic knowledge. They
              typically hold relevant educational qualifications and undergo a
              rigorous selection process
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              3. How flexible are the learning programs at Al Fatah Online Quran
              Academy, and can students tailor them to their preferences?
            </h3>
            <p className="mt-1">
              Yes, students at Al Fatah Online Quran Academy can customize their
              learning programs based on their individual needs and goals. The
              academy offers flexibility in course structures to accommodate
              various preferences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              4. Is the academy suitable for beginners, and how does it support
              students with varying levels of Quranic knowledge?
            </h3>
            <p className="mt-1">
              Al Fatah Online Quran Academy is suitable for beginners, and it
              caters to students with varying levels of Quranic knowledge. The
              academy provides resources and support for those starting their
              Quranic education and offers advanced courses for more experienced
              learners.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              5. What online tools or platforms does the academy employ to
              facilitate effective Quranic learning for its students?
            </h3>
            <p className="mt-1">
              Al Fatah Online Quran Academy employs advanced online platforms
              and technology to facilitate effective Quranic learning. The
              academy utilizes secure and user-friendly tools to ensure a
              seamless online education experience
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              6. Does Al Fatah Online Quran Academy offer specialized courses
              such as Tajweed or Hifz, and how are these programs structured?
            </h3>
            <p className="mt-1">
              Yes, Al Fatah Online Quran Academy offers specialized courses in
              Tajweed, Hifz, and other Quranic studies. These programs are
              designed to provide in-depth knowledge and skills in specific
              areas of Quranic learning.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              7. What measures are in place at Al Fatah Online Quran Academy to
              ensure the safety and security of students during online Quranic
              classes?
            </h3>
            <p className="mt-1 ">
              Al Fatah Online Quran Academy prioritizes the safety and security
              of its students during online classes. Measures such as secure
              online platforms and supervised learning environments are
              implemented to create a safe learning environment
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              8. Can What is the duration of typical courses, and how does the
              academy handle scheduling for students in different time zones?
            </h3>
            <p className="mt-1 ">
              The duration of courses at Al Fatah Online Quran Academy varies
              based on the program. The academy accommodates students from
              different time zones by offering flexible scheduling options to
              ensure accessibility for learners worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              9. Is there a trial or demo class available for prospective
              students, and how can someone enroll in courses at Al Fatah Online
              Quran Academy?
            </h3>
            <p className="mt-1 ">
              Prospective students can sign up for a trial or demo class by
              contacting Al Fatah Online Quran Academy through their website.
              The enrollment process typically involves filling out an online
              form and following the provided instructions for course
              registration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
