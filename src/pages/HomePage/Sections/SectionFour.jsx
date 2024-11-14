import { Link } from "react-router-dom";
import bg from "../../../assets/png/sectionfourbg.png";
import Button from "../../../component/Button/Button";
import { useInView } from "react-intersection-observer";
const SectionFour = () => {
  const { ref: refOne, inView: inViewOne } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: refTwo, inView: inViewTwo } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    // h-[634px]
    <div className="md:w-[95%] lg:w-[80%] w-full mx-auto relative mt-20 sm:mt-40">
      <div className="absloute top-0">
        <img src={bg} alt="Backgroun-Image" className="min-h-[354px]" />
      </div>
      <div className="absolute top-0 w-full text-white text-center mt-8 sm:mt-20">
        <div className="w-full flex justify-center flex-col text-center">
          <h3
            ref={refOne}
            className={`text-2xl font-medium transition-transform duration-500 ease-out ${
              inViewOne
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            The easiest way to
            <br /> power <br />
            up your business with AI
          </h3>
          <p
            ref={refTwo}
            className={`text-base font-normal text-[#BABCC6] sm:max-w-[550px] mx-auto mt-2 sm:mt-5 px-3 sm:px-1 transition-transform duration-500 ease-out ${
              inViewTwo
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Where Data Meets Innovation: Empowering Your Business with Smart
            Insights Imagine a world where data transcends mere numbers to
            become the key that unlocks limitless possibilities. At
            BlueBillionaire.ai, we don’t just process data—we unleash its
            transformative power.
          </p>
          {/* <button className="mt-8">Get Started</button> */}
          <div className="w-full justify-center mt-2 sm:mt-6">
            <Link to="/contactus">
              <Button
                buttonName="Get Started"
                border={true}
                style={""}
                // divStyle={"w-[200px]"}
              />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-20 bg-[#121739]" /> */}
    </div>
  );
};

export default SectionFour;
