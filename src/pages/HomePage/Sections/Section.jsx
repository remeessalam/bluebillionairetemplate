import homeicon from "../../../assets/png/homePageBackground.png";
import homePageImage1 from "../../../assets/images/homePageImage1.jpeg";
import homePageBottomImage from "../../../assets/images/homePageBottomImage.jpeg";
import Component from "../../../assets/svg/Component4.svg";
import Button from "../../../component/Button/Button";
// import ThreeDCardDemo from "../../../component/ThreeD/ThreeDCardDemo";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const animation = { duration: 20000, easing: (t) => t };

const Section = () => {
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

  const { ref: refOne, inView: viewOne } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: refTwo, inView: viewTwo } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="relative flex justify-center items-center bg-cover bg-center flex-col  w-screen mx-auto  min-h-full bg-[#080719] text-white overflow-hidden"
      // bg-top bg-[length:100%_570px]
      style={{ backgroundImage: `url(${homeicon})` }}
    >
      {/* <div className="absolute -top-[16%] w-full opacity-100 z-0 h-full">
        <img src={homeicon} alt="" className="w-full align-middle h-full" />
      </div> */}
      <div className="flex flex-col z-10 overflow-hidden mt-3 mb-4 sm:mb-0 sm:mt-2">
        <div className="flex justify-center mb-5 sm:mb-0">
          <h3 className="text-[#F5F5F5] text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {"Welcome to BlueBillionaire.ai".toUpperCase()}
          </h3>
        </div>
        <div
          ref={refOne}
          className={`text-[54px] text-center leading-[65px] transition-transform duration-900 ease-out ${
            viewOne ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-[54px] text-center leading-[65px]">
            Embarking on a Journey <br /> of Data-Driven <br /> Innovation
          </h2>
        </div>
        <div
          ref={refTwo}
          className={`flex justify-center mt-[28px] transition-transform duration-1000 ease-out  ${
            viewTwo ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="max-w-[718px] text-center px-5 sm:px-0 text-base text-[#BABCC6]">
            Where Data Meets Innovation: Empowering Your Business with Smart
            Insights Imagine a world where data transcends mere numbers to
            become the key that unlocks limitless possibilities. At
            BlueBillionaire.ai, we don’t just process data—we unleash its
            transformative power.
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
        <div className="group h-[365px] overflow-hidden w-[95%] md:w-[77.1%]">
          {/* transition-transform duration-500 group-hover:scale-105 animate-scaleInOut */}
          <img
            className="rounded-t-[50px] md:rounded-t-[82px] h-[420px] w-full object-cover "
            src={homePageImage1}
            alt="homePageImage1"
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
        className="relative flex  h-[70px] pt-4 mt-[24px] keen-slider"
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
      <div></div>
    </div>
  );
};

export default Section;
