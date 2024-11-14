import Section from "./Sections/Section";
import SectionFive from "./Sections/SectionFive";
import SectionFour from "./Sections/SectionFour";
import SectionSeven from "./Sections/SectionSeven";
// import SectionSix from "./Sections/SectionSix";
import SectionThree from "./Sections/SectionThree";
import SectionTwo from "./Sections/SectionTwo";

const AboutPage = () => {
  return (
    <div>
      <Section />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      {/* <SectionSix /> */}
      <SectionSeven />
    </div>
  );
};

export default AboutPage;
