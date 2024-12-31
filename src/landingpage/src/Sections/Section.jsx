import homeicon from "../assets/png/homePageBackground.png";
// "../../../assets/png/homePageBackground.png";
import homePageImage1 from "../assets/images/imageone.jpg";
import homePageImageapp1 from "../assets/images/mobileimageoneless.jpg";
import homePageBottomImage from "../assets/images/homePageBottomImage.jpeg";
import Component from "../assets/svg/Component4.svg";
import Button from "../Components/Button/Buttton";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const animation = { duration: 20000, easing: (t) => t };

const Section = ({ page }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,

    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 7,
      spacing: 10,
    },
  });

  return (
    <div
      className="relative flex justify-center items-center bg-cover bg-center flex-col  w-screen mx-auto  min-h-full  text-white overflow-hidden"
      // bg-top bg-[length:100%_570px]
      style={{ backgroundImage: `url(${homeicon})` }}
    >
      {/* <div className="absolute -top-[16%] w-full opacity-100 z-0 h-full">
        <img src={homeicon} alt="" className="w-full align-middle h-full" />
      </div> */}
      <div className="flex flex-col z-10 overflow-hidden">
        <div className="flex justify-center">
          <h3 className="text-[#F5F5F5] text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {"Welcome to [your company name]".toUpperCase()}
          </h3>
        </div>
        <div className="flex justify-center">
          <h2 className="text-[54px] max-w-[600px] text-center leading-[65px]">
            {page === "web"
              ? "Pioneering the Future of  Data-Driven  Web Development"
              : "Innovating with Purpose  in the World of  App Development"}
          </h2>
        </div>
        <div className="flex justify-center mt-[58px]">
          <p className="max-w-[718px] text-center px-2 sm:px-0 text-sm text-[#BABCC6]">
            {page === "web"
              ? "Where Data Meets Innovation: Building Intelligent Websites Imagine a website where data fuels dynamic, personalized interactions, bringing your brand closer to your audience. At [your company name], we go beyond traditional web development by unlocking the power of data to make each user’s experience truly transformative."
              : "Where Data Meets Innovation: Transforming Mobile Experiences Imagine a world where mobile apps are more than tools—they’re intuitive, data-driven experiences tailored to every user’s needs. At [your company name], we don’t just create apps; we leverage smart data insights to empower and enrich user engagement on every mobile platform."}
          </p>
        </div>
        <div className="flex justify-center h-[43px] gap-3 mt-[24px]">
          {/* <button>Get started</button>
          <button>Lern more</button> */}
          <Link to="/contactus">
            <Button buttonName={"Get started"} border={true} />
          </Link>
          <Link to="/about">
            <Button buttonName={"Learn more"} border={false} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[80px]  z-10">
        <div className="h-[365px] overflow-hidden w-[95%] md:w-[77.1%]">
          <img
            className="rounded-t-[50px] md:rounded-t-[82px] h-[420px] w-full object-cover"
            src={page === "web" ? homePageImage1 : homePageImageapp1}
            alt="homePageImage1"
            // width={780}
            // height={520}
          />
        </div>
        <div className="bg-[#080719] h-[100px] w-[95%] md:w-[77.1%]" />
        {/* w-[780px] */}
        <img
          src={homePageBottomImage}
          alt="homePageBottomImage"
          className="w-[95%] md:w-[77.1%]"
        />
      </div>

      <h3 className="mt-[38px] px-2 sm:px-0 z-10 max-w-[339px] font-medium text-lg text-white text-center">
        Trusted by the best brands around the world
      </h3>

      <div
        ref={sliderRef}
        className="relative flex  h-[28px] mt-[24px] keen-slider"
      >
        <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-[#080719] to-transparent pointer-events-none z-10"></div>

        {[...Array(10)].map((_, idx) => (
          <div
            key={idx}
            className="keen-slider__slide "
            // style={{ maxWidth: "100px !important" }}
          >
            <img src={Component} alt={`Slide ${idx + 1}`} />
          </div>
        ))}
        <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-[#080719] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};
Section.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Section;
