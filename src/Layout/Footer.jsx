import Logo from "../assets/svg/Logo.png";
import facebookvector from "../assets/svg/facebookvector.svg";
import youtubevector from "../assets/svg/youtubevector.svg";
import twittervector from "../assets/svg/twittervector.svg";
import instagramvector from "../assets/svg/instagramvector.svg";
import rightarrow from "../assets/svg/rightarrow.svg";
import location from "../assets/svg/location.svg";
import message from "../assets/svg/message.svg";
import callvector from "../assets/svg/callvector.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between mt-60 md:gap-7 gap-3 bg-[#060F1A] text-white sm:px-20 px-10 py-8 sm:py-16">
      <div className="lg:w-1/4 md:w-1/2 ">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt=""
              className="w-[238px] h-[122px] object-cover"
            />
          </Link>
        </div>
        <div>
          <p className="text-base font-normal">
            Our innovative solutions are designed not just to meet the demands
            of today but to anticipate the challenges of tomorrow, ensuring that
            your business stays ahead of the curve.
          </p>
        </div>
        <div className="flex gap-4 mt-[22px]">
          <div className="flex justify-center items-center bg-[#E8BA20] rounded-full w-[48px] h-[48px]">
            <img src={facebookvector} alt="" />
          </div>
          <div className="flex justify-center items-center bg-[#E8BA20] rounded-full w-[48px] h-[48px]">
            <img src={youtubevector} alt="" />
          </div>
          {/* <Link to={"https://x.com/Bluelionai?t=jarE8-Gn7Mj8MDQEp_gsUw&s=08"}> */}
          <div className="flex justify-center items-center bg-[#E8BA20] rounded-full w-[48px] h-[48px]">
            <img src={twittervector} alt="" />
          </div>
          {/* </Link> */}
          {/* <Link 
            to={
              "https://www.instagram.com/a_b_u_z_a_r_m/profilecard/?igsh=MXBnd3Rkd3VucXpsOQ=="
            }
          >
          */}
          <div className="flex justify-center items-center bg-[#E8BA20] rounded-full w-[48px] h-[48px]">
            <img src={instagramvector} alt="" />
          </div>
          {/* </Link> */}
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 md:pt-[122px] sm:my-0 my-6">
        <h2 className="font-semibold text-2xl">
          Company
          <ul className="mt-3">
            <Link to="/">
              <li className="flex items-center gap-1 text-[#B5B3B3] font-medium text-lg">
                <img src={rightarrow} alt="" className="h-[18px] w-[18px]" />
                Homepage
              </li>
            </Link>
            <Link to="/about">
              <li className="flex items-center gap-1 text-[#B5B3B3] font-medium text-lg">
                <img src={rightarrow} alt="" className="h-[18px] w-[18px]" />
                About Us
              </li>
            </Link>
          </ul>
        </h2>
      </div>

      <div className="lg:w-1/4 md:w-1/2 md:pt-[122px]">
        <h2 className="font-semibold text-2xl">
          Contact Us
          <ul className="mt-3">
            <li className="flex items-center gap-3 text-[#B5B3B3] font-medium text-lg">
              <img src={location} alt="" className="h-[18px] w-[18px]" />
              Office Address:
            </li>
            <li className="flex items-center ml-7 gap-3 text-[#B5B3B3] font-medium text-lg">
              1234 Innovation Drive Suite 200 TechCity, CA 94043 United States
            </li>
            <li className="flex items-center gap-3 text-[#B5B3B3] font-medium text-lg">
              <img src={message} alt="" className="h-[18px] w-[18px]" />
              abc@example.com
            </li>
            <li className="flex items-center gap-3 text-[#B5B3B3] font-medium text-lg">
              <img src={callvector} alt="" className="h-[18px] w-[18px]" />
              +91 1122334455
            </li>
          </ul>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
