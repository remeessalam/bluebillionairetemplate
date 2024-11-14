import sectionTwoImageTwo from "../assets/images/sectionTwoImageTwo.jpeg";
import mobilesetionimagetwo from "../assets/images/mobilesetionimagetwo.jpeg";
// import sectionTwoImageAR from "../assets/images/sectionTwoImageAR.jpg";
import roundedHeart from "../assets/svg/rounded-heart.svg";
// import chinese from "../assets/svg/chinese.svg";
import socialmedia from "../assets/svg/socialmedia.svg";
import landingpage from "../assets/svg/landing-page.svg";
import customweb from "../assets/svg/customweb.svg";
import ios from "../assets/svg/ios.svg";
import android from "../assets/svg/android.svg";
import hybrid from "../assets/svg/hybrid.svg";
import flags from "../assets/svg/flags.svg";
import { useEffect, useRef, useState } from "react";
const SectionServices = ({ page, servicesRef }) => {
  const [isImageTwoInView, setIsImageTwoInView] = useState(false);
  const imageTwoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target === imageTwoRef.current && entry.isIntersecting) {
          setIsImageTwoInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image is in view
    );

    if (imageTwoRef.current) observer.observe(imageTwoRef.current);

    return () => {
      if (imageTwoRef.current) observer.unobserve(imageTwoRef.current);
    };
  }, []);
  return (
    <div className="md:w-[95%] lg:w-[80%] w-full mx-auto md:mt-[120px] mt-[60px]  h-full relative z-10">
      <div
        ref={servicesRef}
        className="flex flex-col items-center lg:items-start lg:flex-row lg:mt-[120px] mt-[60px]"
      >
        <div className="flex flex-col  items-center lg:items-start md:w-1/2 w-full">
          <h3 className="text-[#F5F5F5] w-fit text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {page === "web"
              ? "Web Development Services".toUpperCase()
              : "App Development Services".toUpperCase()}
          </h3>
          <p className="lg:text-[38px] sm:px-0 px-2 font-medium text-center lg:text-start text-white mt-4">
            {page === "web"
              ? "Enhancing Brands with Engaging Web Experiences"
              : "Enhancing Brands with Engaging Mobile App Experiences"}
          </p>
        </div>

        <div className="lg:w-1/2 md:w-3/4 w-full md:px-0 px-2 flex justify-end mt-4 lg:mt-0">
          <p className="text-sm font-normal text-center lg:text-start text-[#BABCC6]">
            {page === "web"
              ? "  At BlueBillionaire.ai, we are dedicated to transforming ideas into  exceptional digital experiences. Our diverse range of services spans           game development, blockchain solutions, augmented and virtual           reality (AR/VR), custom software development, IT infrastructure           services, cybersecurity solutions, mobile app development, and full           -stack web development. Each service is crafted with precision and           creativity, designed to meet the unique needs of our clients while           pushing the boundaries of technology.                        "
              : "  At BlueBillionaire.ai, we are dedicated to transforming ideas into  exceptional digital experiences. Our diverse range of services spans           game development, blockchain solutions, augmented and virtual           reality (AR/VR), custom software development, IT infrastructure           services, cybersecurity solutions, mobile app development, and full           -stack web development. Each service is crafted with precision and           creativity, designed to meet the unique needs of our clients while           pushing the boundaries of technology.                        "}
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-center mt-10 ">
        <div
          className={`md:w-1/2 w-3/4 transition-all duration-1000 ${
            isImageTwoInView
              ? "translate-x-0 opacity-100"
              : "-translate-x-28 opacity-0"
          }`}
        >
          <img
            ref={imageTwoRef}
            src={page === "web" ? sectionTwoImageTwo : mobilesetionimagetwo}
            alt=""
            className="w-[552px] sm:h-[360px] object-cover rounded-lg overflow-hidden"
          />
        </div>
        <div className="flex relative flex-col lg:pb-12 pb-0 justify-end lg:ml-[96px] h-[100%] mt-8 lg:mt-0 ml-0 gap-2 text-white md:w-1/2 w-3/4 lg:h-[535px]">
          <div className="flex w-full items-center">
            <img
              src={page === "web" ? roundedHeart : ios}
              alt=""
              className="w-[45px] h-[45px]"
            />
            <h4 className="sm:text-2xl text-lg font-medium tex ml-4">
              {page === "web" ? "E-commerence Websites" : "iOS App Development"}
            </h4>
          </div>
          <p className="text-sm font-normal sm:text-start text-center md:w-[91%] w-full sm:pl-[58px] text-[#BABCC6]">
            {page === "web"
              ? "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth."
              : "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness."}
          </p>
          <div className="flex items-center mt-4">
            <img
              src={page === "web" ? socialmedia : android}
              alt=""
              className="w-[45px] h-[45px]"
            />
            <h4 className="sm:text-2xl text-lg font-medium ml-4">
              {page === "web"
                ? "Social Media Websites"
                : "Android App Development"}
            </h4>
          </div>
          <p className="text-sm font-normal sm:text-start text-center  md:w-[91% w-full sm:pl-[58px] text-[#BABCC6]">
            {page === "web"
              ? "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly"
              : "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps."}
          </p>
          <div className="flex items-center mt-4">
            <img
              src={page === "web" ? landingpage : hybrid}
              alt=""
              className="w-[45px] h-[45px]"
            />
            <h4 className="sm:text-2xl text-lg font-medium ml-4">
              {page === "web" ? "Landing Websites" : "Hybrid App​ Development"}
            </h4>
          </div>
          <p className="text-sm font-normal sm:text-start text-center  md:w-[91% w-full sm:pl-[58px] text-[#BABCC6]">
            {page === "web"
              ? "Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions."
              : "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices."}
          </p>
          <div className="flex items-center mt-4">
            <img
              src={page === "web" ? customweb : flags}
              alt=""
              className="w-[45px] h-[45px]"
            />
            <h4 className="sm:text-2xl text-lg font-medium ml-4">
              {page === "web" ? "Custom Websites" : "Flutter App Development"}
            </h4>
          </div>
          <p className="text-sm font-normal sm:text-start text-center  md:w-[91% w-full sm:pl-[58px] text-[#BABCC6]">
            {page === "web"
              ? "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience."
              : "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter’s default web app architecture presents challenges, we can overcome them with smart strategies."}
          </p>
          <div
            className="absolute hidden lg:block top-[5px] -left-3 h-[160px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
          <div
            className="absolute hidden lg:block top-[133px] -left-3 h-[260px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
          <div
            className="absolute hidden lg:block top-[290px] -right-5 h-[100px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionServices;
