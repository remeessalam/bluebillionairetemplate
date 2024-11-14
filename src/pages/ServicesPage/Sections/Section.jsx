import homeicon from "../../../assets/png/homePageBackground.png";
import Button from "../../../component/Button/Button";
import servicesgameicon from "../../../assets/png/servicesgameicon.png";
import blockchain from "../../../assets/png/blockchain.png";
import ar from "../../../assets/png/ar.png";
import software from "../../../assets/png/software.png";
import sbc from "../../../assets/png/sbc.png";
import it from "../../../assets/png/it.png";
import consulting from "../../../assets/png/consulting.png";
import bottomimage from "../../../assets/images/homePageBottomImage.jpeg";
import Component from "../../../assets/svg/Component4.svg";
import webdevelopment from "../../../assets/svg/webdevelopment.svg";
import mobiledevelopment from "../../../assets/svg/mobiledevelopment.svg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Modal from "../../../component/Modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const animation = { duration: 20000, easing: (t) => t };

const servicesDetails = [
  {
    icon: servicesgameicon,
    heading: "Game Development",
    paragraph:
      "Embark on a journey of unforgettable gaming experiences with BlueBillionaire.ai, where our expert team of game developers brings your visions to life. ",
  },
  {
    icon: blockchain,
    heading: "Blockchain lutions",
    paragraph:
      "At BlueBillionaire.ai, we provide cutting-edge blockchain development services that revolutionize the security.",
  },
  {
    icon: ar,
    heading: "Augmented Reality & Virtual Reality",
    paragraph:
      "Transform customer experiences with our cutting-edge AR/VR solutions.",
  },
  {
    icon: software,
    heading: "Custom Software Development",
    paragraph:
      "Embark on a journey of unforgettable gaming experiences with BlueBillionaire.ai, where our expert team of game developers brings your visions to life.",
  },
  {
    icon: it,
    heading: "IT Infrastructure Services",
    paragraph:
      "Embark on a journey of unforgettable gaming experiences with BlueBillionaire.ai, where our expert team of game developers brings your visions to life. ",
  },
  {
    icon: sbc,
    heading: "Cyber Security Solutions",
    paragraph:
      "Build a robust IT infrastructure that supports your growth ambitions. Our comprehensive services include strategic.",
  },
  {
    icon: mobiledevelopment,
    heading: "Mobile App Development",
    paragraph:
      "Achieve Mobile Supremacy through Custom App Development Solutions that Combine User- Centric Design, Seamless Functionality, and Sustainable Business Growth",
  },
  {
    icon: webdevelopment,
    heading: "Web Development",
    paragraph:
      "Our full-stack development services provide end-to-end solutions, combining front-end and back-end expertise for a future-proof digital presence.",
  },
  {
    icon: consulting,
    heading: "IT Consultant & Services",
    paragraph:
      "Connect IT and Business for Unparalleled Success with Our Expert Consulting, Aligning IT Infrastructure with Business Goals.",
  },
];
const Section = () => {
  const [openModal, setOpenModal] = useState("");
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
  console.log(openModal, "asjkdfhakjsdfj");
  const closeModal = () => {
    setOpenModal("");
  };

  const { ref: refOne, inView: inViewOne } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  console.log(inViewOne, "aksldfjasdklfj");
  return (
    <>
      <div className="w-screen ">
        <div
          className="relative flex  z-0  items-center bg-contain bg-center bg-no-repeat flex-col  mx-auto  min-h-full bg-[#080719] text-white overflow-hidden"
          // style={{ backgroundImage: `url(${homeicon})` }}
        >
          <div
            ref={refOne}
            className="absolute top-0 left-0 -z-30 h-screen w-screen"
          >
            <img
              src={homeicon}
              alt="homeicon"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex mt-3 sm:mt-44 flex-col z-10 overflow-hidden ">
            <div className="flex justify-center sm:mb-0 mb-2">
              <h3 className="text-[#F5F5F5] text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
                {"our services".toUpperCase()}
              </h3>
            </div>
            <div className="flex justify-center mt-[10px]">
              <p className="max-w-[718px] sm:px-0 px-3 text-center text-base text-[#BABCC6]">
                At AUTH AI SOLUTIONS, we are not just committed to driving
                growth; we also cultivate a culture of continuous learning and
                innovation within our team. Our passionate engineers and data
                scientists are encouraged to explore new ideas, push boundaries,
                and embrace the latest advancements in AI technology.
              </p>
            </div>
            <div className="flex justify-center h-[43px] gap-3 mt-[24px]">
              <Link to="/contactus">
                <Button buttonName={"Get started"} border={true} />
              </Link>
              <Link to="/about">
                <Button buttonName={"Learn more"} border={false} />
              </Link>
            </div>
          </div>

          <div
            className={`flex w-full text-white gap-5 xl:px-28 2xl:px-52  flex-wrap justify-center mt-20 transition-transform duration-500 ease-out ${
              inViewOne
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-100"
            }`}
          >
            {servicesDetails.map((ser, indx) => (
              <div
                key={indx}
                className="flex flex-col justify-between bg-[#091828d1] items-center max-w-[317px] p-6 rounded-xl"
                onClick={() => setOpenModal(indx + 1)}
              >
                <img
                  src={ser.icon}
                  alt="servicesgameicon"
                  className="w-[62px] h-[62px]"
                />
                <h3 className="font-medium text-[28px] text-center leading-8">
                  {ser.heading}
                </h3>
                <p className="font-normal text-center text-base text-[#B5B3B3]">
                  {ser.paragraph}
                </p>
                <button
                  onClick={() => setOpenModal(indx + 1)}
                  className="bg-button-gradient text-lg font-medium px-6 py-1 rounded-3xl mt-6 "
                >
                  Learn More
                </button>
              </div>
            ))}
            <div className="flex items-center flex-col mt-20 text-center">
              <img src={bottomimage} alt="bottomimage" />
              <h4 className="text-white w-80">
                Trusted by the best brands around the world
              </h4>
            </div>

            <div
              ref={sliderRef}
              className="relative flex  mt-[24px] keen-slider"
            >
              <div className="absolute top-0 left-0 w-28 h-full bg-gradient-to-r from-[#080719] to-transparent pointer-events-none z-10"></div>

              {[...Array(10)].map((_, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <img src={Component} alt={`Slide ${idx + 1} h-[28px]`} />
                </div>
              ))}
              <div className="absolute top-0 right-0 w-28 h-full bg-gradient-to-l from-[#080719] to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </div>
      {openModal && <Modal closeModal={closeModal} index={openModal} />}
    </>
  );
};

export default Section;
