import { Link } from "react-router-dom";
import homeicon from "../../../assets/images/aboutpagesectiononebg.jpeg";
import Component from "../../../assets/svg/Component4.svg";
import Button from "../../../component/Button/Button";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
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

  const { ref: refOne, inView: inViewOne } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: refTwo, inView: inViewTwo } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="relative flex justify-center items-center flex-col  min-h-full bg-[#080719] text-white overflow-hidden md:w-[95%] lg:w-[80%] w-full mx-auto"
      // bg-top bg-[length:100%_570px]
    >
      <div className="absolute -top-[16%] w-screen opacity-100 z-0 h-[545px]">
        <img src={homeicon} alt="" className="w-screen align-middle h-full" />
      </div>
      <div className="flex flex-col z-10 overflow-hidden">
        <div className="flex justify-center">
          <h3 className="text-[#F5F5F5] sm:mt-0 mt-3 text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {"About us".toUpperCase()}
          </h3>
        </div>
        <div className="flex justify-center">
          <h2
            ref={refOne}
            className={`text-[35px] mt-3 sm:mt-10 md:mt-0 md:text-[54px] text-center leading-tight max-w-[90%] sm:max-w-[70%] md:leading-[65px] transition-transform duration-500 ease-out ${
              inViewOne
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Revolutionizing Industries, One Data-Driven Solution at a Time
          </h2>
        </div>
        <div className="flex justify-center mt-[10px]">
          <p
            ref={refTwo}
            className={`max-w-[718px] text-center text-base delay-100 text-[#BABCC6] transition-transform duration-500 ease-out ${
              inViewTwo
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            [your company name] is a leading innovator in AI and data-driven
            business solutions, empowering companies to thrive in the digital
            era. We specialize in crafting tailored, transformative strategies
            that ensure our clients stay ahead of the curve.
          </p>
        </div>
        <div className="flex justify-center h-[43px] gap-3 mt-[24px]">
          <Link to="/contactus">
            <Button buttonName={"Join us"} border={true} />
          </Link>
          <Link to="/about">
            <Button buttonName={"Learn more"} border={false} />
          </Link>
        </div>
      </div>

      <h3 className="mt-[85px] sm:mt-[175px] z-10 max-w-[399px] font-medium text-lg text-white text-center">
        Trusted by the best brands around the world
      </h3>

      <div ref={sliderRef} className="relative flex  mt-[24px] keen-slider">
        <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-[#080719] to-transparent pointer-events-none z-10"></div>

        {[...Array(10)].map((_, idx) => (
          <div
            key={idx}
            className="keen-slider__slide"
            // style={{ maxWidth: "100px !important" }}
          >
            <img src={Component} alt={`Slide ${idx + 1} h-[28px]`} />
          </div>
        ))}
        <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-[#080719] to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default Section;
