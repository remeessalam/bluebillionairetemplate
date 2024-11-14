// import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useRef } from "react";
import Section from "../Sections/Section";
import SectionTwo from "../Sections/SectionTwo";
import SectionThree from "../../../pages/HomePage/Sections/SectionThree";
import { SectionFour } from "../Sections/SectionFour";
import SectionServices from "../Sections/SectionServices";

const Applayoutlandingpage = ({ page }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 28, // Adjust for header height
        behavior: "smooth",
      });
    }
  };
  console.log(page, "asjdkfhajsdfh");
  return (
    <div className="bg-[#080719]">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />
      <div className="relative top-28 left-0">
        <div className="overflow-hidden">
          <div className="bg-[#080719] text-white">
            <div ref={homeRef}>
              <Section page={page} />
            </div>
            <div ref={aboutRef}>
              <SectionTwo
                page={page}
                ref={servicesRef}
                scrollToSection={scrollToSection}
                contactRef={contactRef}
              />
            </div>
            <div ref={servicesRef}>
              <SectionServices page={page} ref={servicesRef} />
            </div>
            <SectionThree page={page} />
            <div ref={contactRef}>
              <SectionFour />
            </div>
          </div>
        </div>
      </div>
      <Footer
        homeRef={homeRef}
        aboutRef={aboutRef}
        scrollToSection={scrollToSection}
      />
    </div>
  );
};

export default Applayoutlandingpage;
