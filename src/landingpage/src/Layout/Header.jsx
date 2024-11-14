import { useState } from "react";
import Logo from "../assets/svg/Logo.png";
//  "../assets/svg.Logo.svg";
import menuIcon from "../assets/svg/menuIcon.svg";
import Button from "../Components/Button/Buttton";
// import { Link } from "react-router-dom";
const Header = ({
  homeRef,
  aboutRef,
  servicesRef,
  contactRef,
  scrollToSection,
}) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="fixed top-0 w-full z-20">
      <div className="flex  justify-center bg-[#080719] w-full h-28 text-white font-normal text-sm transition-all duration-200">
        <div className="flex md:justify-around md:w-[90%] w-full items-center py-5 justify-between">
          <div className="md:w-[142px] md:h-[72px] w-[122px] h-[52px] transition-all duration-800">
            <img
              src={Logo}
              alt="Logo"
              // width={142}
              // height={72}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:flex hidden ">
            <ul className="flex gap-10">
              <li
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  scrollToSection(homeRef); // Call the scroll function
                }}
              >
                {/* <Link to="/"> */}
                Home
                {/* </Link> */}
              </li>
              <li
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  scrollToSection(aboutRef); // Call the scroll function
                }}
              >
                {/* <Link to="/about"> */}
                About
                {/* </Link> */}
              </li>
              <li
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  scrollToSection(servicesRef); // Call the scroll function
                }}
              >
                {/* <Link to="/services"> */}
                Sevices
                {/* </Link> */}
              </li>
              <li
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  scrollToSection(contactRef); // Call the scroll function
                }}
              >
                {/* <Link to="/contactus">  */}
                Contact
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <div
            className="text gap-4  justify-end md:flex hidden"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              scrollToSection(contactRef); // Call the scroll function
            }}
          >
            {/* <Button buttonName={"Sign in"} style={""} border={false} /> */}
            {/* <Link to="/contactus"> */}
            <Button
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                scrollToSection(homeRef); // Call the scroll function
              }}
              buttonName={"Get Started"}
              style={""}
              border={true}
            />
            {/* </Link> */}
            {/* <button>Get Started</button> */}
          </div>
          <div
            className="md:hidden flex pr-5"
            onClick={() => setOpenMenu((pre) => !pre)}
          >
            <img
              src={menuIcon}
              alt="menuIcon"
              width={32}
              height={32}
              className={`text-white  transition-transform duration-300 ${
                openMenu ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>
      {/* {openMenu && ( */}
      <div
        className={`${
          openMenu ? `h-[329px] flex flex-col` : `h-0 hidden`
        } transition-all duration-700 bg-[#080719] w-full text-white border-y border-[#505362]`}
      >
        <ul className="flex flex-col w-full h-full p-6 justify-between">
          <li
            className="w-full "
            onClick={(e) => {
              setOpenMenu(false);
              e.preventDefault(); // Prevent default anchor behavior
              scrollToSection(homeRef);
            }}
          >
            {/* <Link to="/"> */}
            Home
            {/* </Link> */}
          </li>
          <li
            className="w-full "
            onClick={(e) => {
              setOpenMenu(false);
              e.preventDefault(); // Prevent default anchor behavior
              scrollToSection(aboutRef);
            }}
          >
            {/* <Link to="/about"> */}
            About
            {/* </Link> */}
          </li>
          <li
            className="w-full "
            onClick={(e) => {
              setOpenMenu(false);
              e.preventDefault(); // Prevent default anchor behavior
              scrollToSection(servicesRef);
            }}
          >
            {/* <Link to="/services"> */}
            Sevices
            {/* </Link> */}
          </li>
          <li
            className="w-full "
            onClick={(e) => {
              setOpenMenu(false);
              e.preventDefault(); // Prevent default anchor behavior
              scrollToSection(contactRef);
            }}
          >
            {/* <Link to="/contactus">  */}
            Contact
            {/* </Link> */}
          </li>
        </ul>
        <div className="pl-6 pb-6 flex flex-col gap-6">
          {/* <Button buttonName={"Sign in"} style={""} border={false} /> */}
          <div
            onClick={(e) => {
              setOpenMenu(false);
              e.preventDefault(); // Prevent default anchor behavior
              scrollToSection(contactRef);
            }}
          >
            {/* <Link to="/contactus"> */}
            <Button buttonName={"Get Started"} style={""} border={true} />
            {/* </Link> */}
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Header;
