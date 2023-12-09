import Image from "next/image";
// import Header from "../app/components/Header";
import vercelImg from "../../public/vercel.svg";
import { FaFacebook } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Registration from "./components/Registration";
import Register from "./components/register";
import About from "./components/About";
import Pricing from "./components/Pricing";
import servicePage from "./components/service";
export default function Home() {
  return (
    <main >
      <Navbar />
      {/* <Header /> */}
      <Register />
      <Services />
      <Registration />
      <About />
      <Pricing />
      {/* <servicePage /> */}
      <Footer />
    

      {/* <Image src={vercelImg} alt="Picture of the author" />
      <FaFacebook className="hover:text-slate-500" /> */}
      
    </main>
  );
}
