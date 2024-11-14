import Section from "../../Sections/Section";
import SectionTwo from "../../Sections/SectionTwo";
import SectionThree from "../../Sections/SectionThree";
import { SectionFour } from "../../Sections/SectionFour";
import PropTypes from "prop-types";

const LandingPage = ({ page, aboutRef }) => {
  return (
    <div className="bg-[#080719] text-white">
      {/* Landing Page - {page === "web" ? "Web" : "Mobile"} */}
      <Section page={page} />
      <SectionTwo page={page} aboutRef={aboutRef} />
      <SectionThree page={page} />
      <SectionFour />
    </div>
  );
};

LandingPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default LandingPage;
