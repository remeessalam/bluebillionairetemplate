import servicepagegif from "../../../assets/images/servicepagegif.gif";
import bulb from "../../../assets/svg/servicepagebulb.svg";
import hand from "../../../assets/svg/servicepagehand.svg";

const SectionTwo = () => {
  return (
    <div
      className="flex mt-16 flex-col lg:flex-row items-center gap-5  bg-current bg-cover py-16 px-7"
      style={{ backgroundImage: `url(${servicepagegif})` }}
    >
      <div className="sm:w-[90%] w-full px-2 sm:px-0 lg:w-1/2">
        <div className="flex justify-start">
          <h3 className="text-[#F5F5F5] text-[10px] rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {"our values".toUpperCase()}
          </h3>
        </div>
        <div className="">
          <h2 className="text-[30px] mt-10 md:mt-0 font-bold text-white md:text-[48px] text-start leading-[30px] max-w-[90%] sm:max-w-[70%] md:leading-[65px]">
            Integrity at Our Core, Innovation in Our Spirit
          </h2>
        </div>
        <div className="flex justify-center mt-[10px] mb-5">
          <p className="max-w-[718px] text-start text-base text-[#BABCC6]">
            Our diverse expertise spans multiple industries, empowering
            businesses of all sizes to harness the transformative power of AI
            and unlock invaluable data-driven insights.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col gap-5 items-center">
          <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#E8BA20]">
            <img src={bulb} alt="Innovation and Excellence" />
          </div>
          <div>
            <h3 className="text-[28px] sm:text-start text-center font-medium text-white">
              Innovation and Excellence
            </h3>
            <p className="text-base sm:text-start text-center font-normal text-[#B5B3B3]">
              Leading the future with cutting-edge solutions.
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col  gap-5 items-center mt-5">
          <div className="flex justify-center items-center w-[90px] h-[90px] rounded-full bg-[#E8BA20]">
            <img src={hand} alt="" />
          </div>
          <div>
            <h3 className="text-[28px] sm:text-start text-center font-medium text-white">
              Integrity and Transparency
            </h3>
            <p className="text-base sm:text-start text-center font-normal text-[#B5B3B3]">
              Building trust, fostering relationships, and ensuring
              accountability.
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:w-[90%] w-full px-2  lg:w-1/2 justify-center items-center h-full flex-col gap-8   bg-[#070719] py-20 sm:px-10 rounded-xl">
        <div className=" w-[96%] sm:w-[90%] relative">
          <h3 className="font-medium max-w-[150px] text-base sm:text-xl text-white">
            Game Development
          </h3>
          <div className="mt-3 w-[100%] h-2 bg-white rounded-lg overflow-hidden">
            <div className="w-[94%]  bg-yellow-500 h-full"></div>
            <h4 className="absolute top-[6%] text-xs sm:text-base right-[1%] text-white ">
              94%
            </h4>
          </div>
        </div>
        <div className="w-[96%] sm:w-[90%] relative">
          <h3 className="font-medium text-base sm:text-xl text-white">
            AR-VR Development
          </h3>
          <div className="mt-3 w-[100%] h-2 bg-white rounded-lg overflow-hidden">
            <div className="w-[92%]  bg-yellow-500 h-full"></div>
            <h4 className="absolute top-[6%] text-xs sm:text-base right-[3%] text-white ">
              92%
            </h4>
          </div>
        </div>
        <div className="w-[96%] sm:w-[90%] relative">
          <h3 className="font-medium max-w-[85%] text-base sm:text-xl text-white">
            Web Application Development
          </h3>
          <div className="mt-3 w-[100%] h-2 bg-white rounded-lg overflow-hidden">
            <div className="w-[95%]  bg-yellow-500 h-full"></div>
            <h4 className="absolute top-[6%] text-xs sm:text-base right-0 text-white ">
              95%
            </h4>
          </div>
        </div>
        <div className="w-[96%] sm:w-[90%] relative">
          <h3 className="font-medium max-w-[85%]  text-base sm:text-xl text-white">
            APP Application Development
          </h3>
          <div className="mt-3 w-[100%] h-2 bg-white rounded-lg overflow-hidden">
            <div className="w-[98%]  bg-yellow-500 h-full"></div>
            <h4 className="absolute text-xs sm:text-base top-[6%] -right-[3%] text-white ">
              98%
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
