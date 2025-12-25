import Hero from "@/components/Hero";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievment from "@/components/Achievment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects/>
      <Experience/>
      <Achievment/>
      <Footer/>
      
    </>
  );
}
