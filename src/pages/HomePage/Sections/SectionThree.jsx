import homeicon from "../../../assets/png/homePageBackground.png";
import sectionthreeimageone from "../../../assets/images/sectionthreeimageone.gif";
import sectionthreeimagetwo from "../../../assets/images/sectionthreeimagetwo.jpeg";
import sectionthreeimagethree from "../../../assets/images/sectionthreeimagethree.png";
import cloud from "../../../assets/svg/cloud.svg";
import setting from "../../../assets/svg/setting.svg";
import tick from "../../../assets/svg/tick.svg";
import { useInView } from "react-intersection-observer";

const SectionThree = () => {
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
      className="relative flex flex-col items-center text-white md:pt-[120px] pt-[60px]"
      // style={{ backgroundImage: `url(${homeicon})` }}
    >
      <div className="absolute -top-[12rem] w-screen opacity-100 z-0 h-full">
        <img
          src={homeicon}
          alt="homeicon"
          className="w-screen h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-[#F5F5F5] relative z-10 text-[10px] w-fit rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
          {"Our solution".toUpperCase()}
        </h3>
      </div>
      <div className="mt-3 z-10">
        <h2
          ref={refOne}
          className={`text-[44px] sm:text-[54px] text-center leading-[65px] transition-transform duration-500 ease-out ${
            inViewOne ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Meet Our Process
        </h2>
      </div>
      <div
        ref={refTwo}
        className={`mt-3 z-10 flex justify-center transition-transform duration-500 w-full ease-out ${
          inViewTwo ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <p className="text-center text-base text-[#BABCC6] sm:px-0 px-3  sm:max-w-[523px]">
          At [your company name], we believe that our success is deeply
          intertwined with the effectiveness of our processes. Our streamlined
          approach ensures that your projects are executed with precision,
          efficiency, and a focus on delivering exceptional results.
        </p>
      </div>
      <div className="flex justify-center w-full">
        <div className="relative flex justify-center z-10 mt-[51px] px-4">
          <img
            src={sectionthreeimageone}
            alt="AI image"
            // className="rounded-2xl w-[70%] h-[50vh] object-top object-cover"
            className="rounded-2xl h-[20rem] sm:h-[50vh] w-full object-top object-cover"
          />
          <img
            src={sectionthreeimagetwo}
            alt="AI image"
            className="absolute -bottom-2 sm:-bottom-[3rem] left-2 md:-left-[1rem] lg:-left-[6.5rem] opacity-75 rounded-2xl w-[6rem] sm:w-[12rem] object-contain aspect-square"
          />
          <img
            src={sectionthreeimagethree}
            alt="AI image"
            className="absolute right-6 md:-right-[1rem] lg:-right-[6rem] top-2 sm:top-12 opacity-95 rounded-2xl w-[8rem] sm:w-[12rem] object-contain"
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-10 z-10 mt-28 justify-center">
        <div className="relative px-3 sm:px-0">
          <div className="flex flex-col  sm:items-start items-center">
            <img src={cloud} alt="cloud" className="w-[40px]" />
            <h4 className="text-2xl font-medium mt-4 text-center">
              Understanding Your Needs
            </h4>
          </div>
          <p className="text-base font-normal sm:text-start text-center mt-2 text-[#BABCC6] max-w-[318px] pl-[18px]">
            They emphasize building strong partnerships and ensure open
            communication throughout the project lifecycle.
          </p>
          <div
            className="absolute hidden lg:block top-[5px] -left-7 h-[100px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
          <div
            className="absolute hidden lg:block top-[115px] -left-7 h-[45px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
        </div>

        <div className="relative px-3 sm:px-0">
          <div className="flex flex-col  sm:items-start items-center">
            <img src={setting} alt="setting" className="w-[40px]" />
            <h4 className="text-2xl font-medium mt-4 text-center">
              Data Acquisition and Analysis
            </h4>
          </div>
          <p className="text-base font-normal mt-2 sm:text-start text-center text-[#BABCC6] max-w-[318px] pl-[18px]">
            Their AI expertise focuses on analyzing unstructured data to
            generate actionable insights
          </p>
          <div
            className="absolute hidden lg:block top-[5px] -left-7 h-[100px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
          <div
            className="absolute hidden lg:block top-[115px] -left-7 h-[45px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
        </div>

        <div className="relative px-3 sm:px-0">
          <div className="flex flex-col  sm:items-start items-center">
            <img src={tick} alt="cloud" className="w-[40px]" />
            <h4 className="text-2xl font-medium mt-4 text-center">
              Customized Solution Development
            </h4>
          </div>
          <p className="text-base font-normal mt-2   sm:text-start text-center text-[#BABCC6] max-w-[318px] pl-[18px]">
            Based on Client needs, we recommend a solution from their service
            offerings from our Wide Range of Services
          </p>
          <div
            className="absolute hidden lg:block top-[5px] -left-7 h-[100px] w-[1px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,0.6937368697478992) 0%, rgba(255,255,255,0.929030987394958) 100%)",
            }}
          />
          <div
            className="absolute hidden lg:block top-[115px] -left-7 h-[45px] w-[1px]"
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

export default SectionThree;
