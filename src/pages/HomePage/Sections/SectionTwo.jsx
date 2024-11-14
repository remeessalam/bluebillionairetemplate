import sectionTwoImageOne from "../../../assets/images/sectionTwoImageOne.png";
import sectionTwoImageTwo from "../../../assets/images/sectionTwoImageTwo.jpg";
import sectionTwoImageAR from "../../../assets/images/sectionTwoImageAR.jpg";
import roundedHeart from "../../../assets/svg/roundedHeart.svg";
import chinese from "../../../assets/svg/chinese.svg";
import setting from "../../../assets/svg/setting.svg";
import Button from "../../../component/Button/Button";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ThreeDCardDemo from "../../../component/ThreeD/ThreeDCardDemo";
const SectionTwo = () => {
  const [isInView, setIsInView] = useState(false);
  const [isImageTwoInView, setIsImageTwoInView] = useState(false);
  const [isImageThreeInView, setIsImageThreeInView] = useState(false);
  const imageRef = useRef(null);
  const imageTwoRef = useRef(null);
  const imageThreeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Stop observing once in view
        }
        if (entry.target === imageTwoRef.current && entry.isIntersecting) {
          setIsImageTwoInView(true);
          observer.unobserve(entry.target);
        }
        if (entry.target === imageThreeRef.current && entry.isIntersecting) {
          setIsImageThreeInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image is in view
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (imageTwoRef.current) observer.observe(imageTwoRef.current);
    if (imageThreeRef.current) observer.observe(imageThreeRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (imageTwoRef.current) observer.unobserve(imageTwoRef.current);
      if (imageThreeRef.current) observer.unobserve(imageThreeRef.current);
    };
  }, []);
  return (
    <div className="md:w-[95%] lg:w-[80%] w-full mx-auto md:mt-[120px] mt-[60px]  h-full relative z-10">
      <div className="flex-col md:flex-row justify-center items-center md:justify-normal md:items-start flex h-full">
        <div
          ref={imageRef}
          className={`md:w-1/2 w-3/4 min-h-full my-auto transition-all duration-1000 ${
            isInView ? "translate-x-0 opacity-100" : "-translate-x-28 opacity-0"
          }`}
        >
          <ThreeDCardDemo
            img={sectionTwoImageOne}
            style={`max-h-[580px]  w-[642px] my-auto`}
          />
          {/* <img
            ref={imageRef}
            src={sectionTwoImageOne}
            alt=""
            width={642}
            height={580}
            className=" max-h-[580px] my-auto"
          /> */}
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 sm:w-3/4 w-full sm:px-0 px-5  md:py-24 py-12 md:pl-24">
          <h3 className="text-[#F5F5F5] w-24 text-[10px] rounded-full border px-[19px] py-[11px] shadow-8xl shadow-white">
            {"About us".toUpperCase()}
          </h3>
          <p className="text-xl font-medium text-white">
            At BlueBillionaire.ai, we are passionately committed to delivering
            premium website design and exceptional services that exemplify our
            dedication to quality and excellence.
          </p>
          <p className="text-base font-normal text-[#BABCC6] mb-8">
            We recognize that every business is unique, and our approach is
            rooted in a deep understanding of your specific needs and
            challenges. By doing so, we provide customized solutions that not
            only meet your expectations but also drive measurable results that
            can significantly impact your bottom line.
          </p>
          {/* <button className="mt-8 text-white items-start w-fit">
            Get Started
          </button> */}
          <div>
            <Link to="/contactus">
              <Button
                buttonName="Get Started"
                border={true}
                // divStyle={"max-w-[200px]"}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:mt-[120px] mt-[60px]">
        <div className="flex flex-col  items-center lg:items-start md:w-1/2 w-full">
          <h3 className="text-[#F5F5F5] w-[117px] text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {"Our Services".toUpperCase()}
          </h3>
          <p className="lg:text-[38px] font-medium text-center lg:text-start text-white mt-4">
            Unblock the potential of
            <br /> your business with AI
          </p>
        </div>

        <div className="lg:w-1/2 w-full sm:px-0 px-5  sm:w-3/4 flex justify-end mt-4 lg:mt-0">
          <p className="text-base font-normal text-center lg:text-start text-[#BABCC6]">
            At BlueBillionaire.ai, we are dedicated to transforming ideas into
            exceptional digital experiences. Our diverse range of services spans
            game development, blockchain solutions, augmented and virtual
            reality (AR/VR), custom software development, IT infrastructure
            services, cybersecurity solutions, mobile app development, and full
            -stack web development. Each service is crafted with precision and
            creativity, designed to meet the unique needs of our clients while
            pushing the boundaries of technology.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-center mt-10">
        <div
          ref={imageTwoRef}
          className={`md:w-1/2 w-3/4 transition-all duration-1000 ${
            isImageTwoInView
              ? "translate-y-0 opacity-100"
              : "translate-y-28 opacity-0"
          }`}
        >
          <ThreeDCardDemo
            img={sectionTwoImageTwo}
            style={`w-[552px]sm:h-[360px] object-contain`}
          />
          {/* 
          <img
            src={sectionTwoImageTwo}
            alt=""
            className="w-[552px] sm:h-[360px] object-contain"
          /> */}
        </div>
        <div className="flex relative flex-col lg:pb-12 pb-0 justify-end lg:ml-[96px] h-[100%] mt-8 lg:mt-0 ml-0 gap-2 text-white md:w-1/2 sm:w-3/4 w-full px-5 sm:px-0 lg:h-[535px]">
          <div className="flex w-full items-center">
            <img src={roundedHeart} alt="" />
            <h4 className="sm:text-2xl text-lg font-medium tex ml-4">
              Game Development
            </h4>
          </div>
          <p className="text-base font-normal md:w-[91%] w-full sm:pl-[58px] text-[#BABCC6]">
            Embark on a journey of unforgettable gaming experiences with
            BlueBillionaire.ai, where our expert team of game developers brings
            your visions to life. We specialize in crafting innovative games
            that captivate and engage players across all platforms—from mobile
            and console to PC.
          </p>
          <div className="flex items-center mt-4">
            <img src={chinese} alt="" />
            <h4 className="sm:text-2xl text-lg font-medium ml-4">
              Blockchain Solutions
            </h4>
          </div>
          <p className="text-base font-normal  md:w-[91% w-full sm:pl-[58px] text-[#BABCC6]">
            At BlueBillionaire.ai,we provide cutting-edge blockchain development
            services that revolutionize the decentralised operation, security,
            and transparency of your company&rsquo;s operations. Our expertise
            includes developing secure smart contracts, cutting-edge
            decentralised apps, and bespoke cryptocurrency solutions—all
            meticulously crafted to enable your company to take the fully
            leverage the groundbreaking possibilities of blockchain technology.
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

      <div className="flex flex-col lg:flex-row items-center text-white sm:mt-[59px] gap-4">
        <div className="relative flex flex-col items-center lg:items-start w-full sm:px-0 px-5 sm:w-3/4 lg:w-1/2 mt-5 lg:h-[218px]">
          <div className="flex items-center">
            <img src={setting} alt="" />
            <h4 className="text-2xl font-medium ml-4">
              Augmented Reality & Virtual Reality (AR/VR)
            </h4>
          </div>
          <p className="text-base font-normal text-[#BABCC6] w-full max-w-[500px] mt-[17px] sm:pl-[58px]">
            with our cutting-edge AR/VR solutions. We create immersive
            environments that allow users to interact with your products and
            services in innovative and exciting ways. Whether it&rsquo;s
            enhancing training programs, creating virtual tours, or developing
            engaging marketing experiences, our AR/VR technology drives customer
            engagement and significantly boosts sales. Let us help you bridge
            the gap between the digital and physical worlds to create
            unforgettable experiences.
          </p>
          <div
            className="absolute hidden lg:block top-[105px] -left-3 h-[90px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
          <div
            className="absolute hidden lg:block top-[195px] -left-3 h-[100px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
        </div>
        <div
          ref={imageThreeRef}
          className={`w-3/4 flex justify-center lg:w-1/2 mt-5 lg:mt-0 transition-all duration-1000
        ${
          isImageThreeInView
            ? "translate-x-0 opacity-100"
            : "translate-x-28 opacity-0"
        }
        `}
        >
          <ThreeDCardDemo
            img={sectionTwoImageAR}
            style={`rounded-2xl w-[552px]  object-contain`}
          />
          {/* <img
           
            src={sectionTwoImageAR}
            alt="sectionTwoImageAR"
            className="rounded-2xl w-[552px]  object-contain"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
