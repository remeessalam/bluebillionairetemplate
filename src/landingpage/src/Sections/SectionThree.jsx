import { useInView } from "react-intersection-observer";
import profileImage from "../assets/images/profileimage.jpeg";
import vector from "../assets/svg/vector.svg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
const animation = { duration: 50000, easing: (t) => t };

const SectionFive = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, false, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 954px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 650px)": {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
    },
  });
  const [sliderRefTwo] = useKeenSlider({
    loop: true,
    rtl: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, false, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 954px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 650px)": {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
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
    // md:w-[95%] lg:w-[80%]
    <div className=" w-screen mx-auto flex-col flex items-center mt-20 text-white">
      <div>
        <h3
          ref={refOne}
          className={`text-[#F5F5F5] text-[10px] w-fit rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white z-10 transition-transform duration-500 ease-out ${
            inViewOne ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {"Testimonials".toUpperCase()}
        </h3>
      </div>
      <div className="mt-2">
        <h3
          ref={refTwo}
          className={`text-[54px] text-center leading-[65px] transition-transform delay-200 duration-500 ease-out ${
            inViewTwo ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Hear what our customers
          <br /> have to say about us
        </h3>
      </div>
      {/* <div className="flex flex-col mt-28"> */}
      <div
        ref={sliderRef}
        className="mt-28 relative w-screen flex-row flex keen-slider"
      >
        <div className="absolute hidden md:block top-0 left-0 w-56 h-[254px]  bg-gradient-to-r from-[#080719] to-transparent pointer-events-none z-10" />
        {[...Array(10)].map((_, idx) => (
          <div
            key={idx}
            className="keen-slider__slide p-4 bg-[#0E0E21] rounded-md"
          >
            <div className="flex w-full items-center">
              <div className="flex justify-between w-full">
                <div className="flex ">
                  <img
                    src={profileImage}
                    alt="profileImage"
                    className="rounded-full h-10"
                    width={40}
                  />
                  <div className="ml-3">
                    <h2>Lilly jorge</h2>
                    <p className="font-normal text-sm text-[#858892]">
                      CEO - Text Soulutions Inc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center shadow-9xl shadow-white w-8 h-8 rounded-full border border-[#3D96FF]">
                <img src={vector} alt="vector" />
              </div>
            </div>
            <div className="mt-2">
              <p className="font-normal text-[14px] text-[#BABCC6] leading-">
                &quot;We were looking for a way to improve the security and
                transparency of our financial transactions. BlueBillionaire.ai
                developed a bespoke blockchain solution that has revolutionized
                our operations. We now experience faster transaction times,
                increased security, and enhanced trust with our partners.&quot;
              </p>
            </div>
          </div>
        ))}
        <div className="absolute hidden md:block top-0 right-0 w-56 h-[254px] bg-gradient-to-l from-[#080719] to-transparent pointer-events-none z-10" />
      </div>
      <div
        ref={sliderRefTwo}
        className="mt-12 w-screen  relative flex keen-slider"
      >
        <div className="absolute hidden md:block top-0 left-0 w-56 h-[254px] bg-gradient-to-r from-[#080719] to-transparent pointer-events-none z-10" />

        {[...Array(10)].map((_, idx) => (
          <div
            key={idx}
            className="keen-slider__slide  p-4 bg-[#0E0E21] rounded-md"
          >
            <div className="flex w-full items-center justify-between">
              <img
                src={profileImage}
                alt="profileImage"
                className="rounded-full h-10"
                width={40}
              />
              <div>
                <h2>Lilly jorge</h2>
                <p className="font-normal text-sm text-[#858892]">
                  CEO - Text Soulutions Inc.
                </p>
              </div>
              <div className="flex justify-center items-center shadow-9xl shadow-white w-8 h-8 rounded-full border border-[#3D96FF]">
                <img src={vector} alt="vector" />
              </div>
            </div>
            <div className="mt-2">
              <p className="font-normal text-[14px] text-[#BABCC6] leading-2">
                &quot;We were looking for a way to improve the security and
                transparency of our financial transactions. BlueBillionaire.ai
                developed a bespoke blockchain solution that has revolutionized
                our operations. We now experience faster transaction times,
                increased security, and enhanced trust with our partners.&quot;
              </p>
            </div>
          </div>
        ))}
        <div className="absolute hidden md:block top-0 right-0 w-56 h-[254px] bg-gradient-to-l from-[#080719] to-transparent pointer-events-none z-10" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default SectionFive;
