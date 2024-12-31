import aboutpageSectiontwobg from "../../../assets/png/aboutpageSectiontwobg.png";
import Button from "../../../component/Button/Button";
import bulb from "../../../assets/svg/bulb.svg";
import flag from "../../../assets/svg/flag.svg";
import badge from "../../../assets/svg/badge.svg";
import globe from "../../../assets/svg/globe.svg";
import groupimage from "../../../assets/svg/groupimage.svg";
import growth from "../../../assets/svg/growth.svg";
import { Link } from "react-router-dom";

// h-[595px]
const SectionTwo = () => {
  return (
    <div
      className="relative mt-24 w-full flex items-center justify-center text-white min-h-screen bg-current bg-cover"
      style={{ backgroundImage: `url(${aboutpageSectiontwobg})` }}
    >
      {/* <div className="absolute top-0 opacity-35 object-cover">
        <img
          src={aboutpageSectiontwobg}
          alt=""
          className="h-full object-cover"
        />
      </div> */}
      <div className="flex md:flex-row flex-col w-full min-h-[506px] px-3 sm:pl-11 gap-4">
        <div className="flex mt-5 md:mt-0 w-full md:w-[45%] flex-col justify-center items-start pr-6">
          <h3 className="text-[#F5F5F5] w-fit text-[10px] mb-3 sm:mb-0 rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white">
            {"Who we are".toUpperCase()}
          </h3>
          <h2 className="text-[38px] font-medium text-start  leading-tight">
            Your Vision, Amplified by AI Innovation
          </h2>
          <p className="max-w-[718px] text-start text-base mt-3 sm:mt-0 text-[#BABCC6]">
            We elevate your vision by harnessing the power of AI to deliver
            innovative, data-driven solutions that drive transformative success
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="/contactus">
              <Button buttonName="Join us" border={true} />
            </Link>
            <Link to="/about">
              <Button buttonName="Learn more" />
            </Link>
          </div>
        </div>
        <div className="flex gap-3 flex-col justify-center items-center w-full md:w-[45%] py-16">
          <div className="flex  sm:flex-row flex-col gap-12">
            <div className="w-full sm:w-1/2 relative ">
              <div>
                <img src={bulb} alt="setting" />
                <h4 className="text-2xl font-medium mt-4">Innovation</h4>
              </div>
              <p className="text-base font-normal mt-2 text-[#BABCC6] max-w-[318px]">
                At [your company name], we constantly push the boundaries of AI
                and technology to create groundbreaking solutions. Innovation is
                at the heart of everything we do, enabling us to stay ahead in a
                rapidly evolving digital world.
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
            <div className="w-full sm:w-1/2 relative ">
              <div>
                <img src={flag} alt="setting" />
                <h4 className="text-2xl font-medium mt-4">Ownership</h4>
              </div>
              <p className="text-base font-normal mt-2 text-[#BABCC6] max-w-[318px]">
                We take full responsibility for the success of every project,
                owning each step from concept to execution. Our team is
                dedicated to delivering outcomes that make a tangible impact on
                our clients&rsquo; businesses.
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
          <div className="flex  sm:flex-row flex-col gap-12">
            <div className="w-full sm:w-1/2 relative ">
              <div>
                <img src={badge} alt="setting" />
                <h4 className="text-2xl font-medium mt-4">Commitment</h4>
              </div>
              <p className="text-base font-normal mt-2 text-[#BABCC6] max-w-[318px]">
                Our unwavering commitment to excellence drives us to exceed
                expectations on every project. We are passionate about
                delivering results that align with our clients’ vision and
                objectives.
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
            <div className="w-full sm:w-1/2 relative ">
              <div>
                <img src={globe} alt="setting" />
                <h4 className="text-2xl font-medium mt-4">Openness</h4>
              </div>
              <p className="text-base font-normal mt-2 text-[#BABCC6] max-w-[318px]">
                We believe in transparency and open communication with our
                clients and within our team. This openness ensures that we are
                always aligned with our clients’ goals and fosters an
                environment of trust and creativity.
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
          <div className="flex  sm:flex-row flex-col gap-12">
            <div className="w-full sm:w-1/2 relative ">
              <div>
                <img src={groupimage} alt="setting" />
                <h4 className="text-2xl font-medium mt-4">Teamwork</h4>
              </div>
              <p className="text-base font-normal mt-2 text-[#BABCC6] max-w-[318px]">
                Collaboration is key to our success. By fostering a culture of
                teamwork, we combine diverse perspectives and expertise to
                develop solutions that are greater than the sum of their parts.
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
            <div className="w-full sm:w-1/2 relative ">
              <div>
                <img src={growth} alt="setting" />
                <h4 className="text-2xl font-medium mt-4">Growth</h4>
              </div>
              <p className="text-base font-normal mt-2 text-[#BABCC6] max-w-[318px]">
                We are committed to continuous learning and development, both
                for our team and our clients. Growth is not just a goal;
                it&rsquo;s a mindset that drives us to evolve, innovate, and
                succeed in everything we do
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
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
