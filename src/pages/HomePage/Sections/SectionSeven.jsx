import facebookicon from "../../../assets/svg/facebook.svg";
import twilioicon from "../../../assets/svg/twilio.svg";
import linkedinicon from "../../../assets/svg/linkedin.svg";
import discordicon from "../../../assets/svg/discord.svg";
import youtubeicon from "../../../assets/svg/youtube.svg";
import messengericon from "../../../assets/svg/messenger.svg";
import pintersticon from "../../../assets/svg/pinterest.svg";
import twitericon from "../../../assets/svg/twitter.svg";
import googleicon from "../../../assets/svg/google.svg";
import Button from "../../../component/Button/Button";
import { Link } from "react-router-dom";
const SectionSeven = () => {
  return (
    <div className="md:w-[95%] lg:w-[80%] w-full mx-auto lg:justify-between items-center  gap-2 flex-col lg:flex-row flex mt-20">
      <div className="relative lg:w-1/3 md:w-1/2 w-[80%] h-[405px]">
        <div className="absolute flex justify-center items-center w-[106px] h-[106px] rounded-full border shadow-10xl shadow-white">
          <img
            src={facebookicon}
            alt="facebookicon"
            className="w-[52px] h-[51px]"
          />
        </div>
        <div className="absolute top-6 right-0 flex justify-center items-center w-[66px] h-[66px] rounded-full border shadow-10xl shadow-white">
          <img
            src={twilioicon}
            alt="facebookicon"
            className="w-[32px] h-[32px]"
          />
        </div>
        <div className="absolute top-40 left-14 w-[66px] h-[66px] rounded-full bg-[#141425]" />
        <div className="absolute flex justify-center top-48 right-20 items-center w-[80px] h-[80px] rounded-full border shadow-10xl shadow-white">
          <img
            src={linkedinicon}
            alt="facebookicon"
            className="w-[39px] h-[539px]"
          />
        </div>
        <div className="absolute top-[12.5rem] right-0 w-[66px] h-[66px] rounded-full bg-[#141425]" />

        <div className="absolute flex bottom-8 left-0 justify-center items-center w-[84px] h-[84px] rounded-full border shadow-10xl shadow-white">
          <img
            src={discordicon}
            alt="facebookicon"
            className="w-[41px] h-[41px]"
          />
        </div>
        <div className="absolute bottom-0 right-16 w-[66px] h-[66px] rounded-full bg-[#141425]" />

        <div className="absolute flex bottom-8 right-4 justify-center items-center w-[60px] h-[60px] rounded-full border shadow-10xl shadow-white">
          <img
            src={youtubeicon}
            alt="facebookicon"
            className="w-[29px] h-[29px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-center lg:w-1/3 md:w-1/2  sm:w-[80%] px-5 sm:px-5">
        <h3 className="text-[#F5F5F5] text-[10px] w-fit rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white z-10 my-5 sm:my-0">
          {"join us".toUpperCase()}
        </h3>
        <h3 className="text-[54px] text-center leading-[65px] max-w-[280px] text-white">
          Unlock Your Potential
        </h3>
        <p className="text-[#BABCC6] my-5 text-base font-normal sm:max-w-[440px] text-center">
          Join us today and unlock the true potential of your data, transforming
          it into actionable insights that propel your business forward. We
          understand that data is one of your most valuable assets, and our
          solutions are designed to maximize its potential. Together, we can
          navigate the complexities of the digital landscape, turning challenges
          into opportunities and creating a brighter, more prosperous future for
          your organization.
        </p>
        <Link to="/contactus">
          <Button buttonName="Contact us" border={false} />
        </Link>
        {/* <button className="text-white">Contact us</button> */}
      </div>
      <div className="relative lg:w-1/3 md:w-1/2 w-[80%] h-[405px]">
        <div className="absolute  top-6 left-0 flex justify-center items-center w-[66px] h-[66px] rounded-full border shadow-10xl shadow-white">
          <img
            src={twilioicon}
            alt="facebookicon"
            className="w-[32px] h-[32px]"
          />
        </div>
        <div className="absolute top-0 right-0 flex justify-center items-center w-[106px] h-[106px] rounded-full border shadow-10xl shadow-white">
          <img
            src={messengericon}
            alt="facebookicon"
            className="w-[52px] h-[51px]"
          />
        </div>
        <div className="absolute top-[12.5rem] left-0 w-[66px] h-[66px] rounded-full bg-[#141425]" />

        <div className="absolute top-48 right-20  flex justify-center items-center w-[80px] h-[80px] rounded-full border shadow-10xl shadow-white">
          <img
            src={pintersticon}
            alt="facebookicon"
            className="w-[39px] h-[539px]"
          />
        </div>
        <div className="absolute top-40 right-0 w-[66px] h-[66px] rounded-full bg-[#141425]" />

        <div className="absolute  bottom-8 right-0 flex justify-center items-center w-[84px] h-[84px] rounded-full border shadow-10xl shadow-white">
          <img
            src={twitericon}
            alt="facebookicon"
            className="w-[41px] h-[41px]"
          />
        </div>
        <div className="absolute bottom-0 left-16 w-[66px] h-[66px] rounded-full bg-[#141425] " />
        <div className="absolute bottom-8 left-4  flex justify-center items-center w-[60px] h-[60px] rounded-full border shadow-10xl shadow-white">
          <img
            src={googleicon}
            alt="facebookicon"
            className="w-[29px] h-[29px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
