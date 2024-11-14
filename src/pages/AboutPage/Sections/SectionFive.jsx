import { useEffect, useRef, useState } from "react";
import aboutpagesectionfiveimageone from "../../../assets/images/aboutpagesectionfiveimageone.jpeg";
const SectionFive = () => {
  const [isInView, setIsInView] = useState(false);
  const [isImageTwoInView, setIsImageTwoInView] = useState(false);
  const imageRef = useRef(null);
  const imageTwoRef = useRef(null);

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
      },
      { threshold: 0.1 } // Trigger when 10% of the image is in view
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (imageTwoRef.current) observer.observe(imageTwoRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (imageTwoRef.current) observer.unobserve(imageTwoRef.current);
    };
  }, []);
  return (
    <div
      className={`flex flex-col items-center md:w-[95%] lg:w-[80%] w-full mx-auto text-white  `}
    >
      <div className="h-[1px] w-[70%] bg-[#EAF3F8]" />
      <div className="mt-8">
        <h2 className="font-extrabold text-center text-[38px]">Brand Stroy</h2>
      </div>
      <div className="flex items-center md:flex-row flex-col gap-6 mt-7 w-[85%]">
        <img
          ref={imageRef}
          src={aboutpagesectionfiveimageone}
          alt=""
          className={`w-[85%] sm:w-[45%] rounded-lg transition-all duration-1000 ${
            isInView ? "translate-x-0 opacity-100" : "-translate-x-28 opacity-0"
          }`}
        />
        <div>
          <h2 className="text-[26px] font-bold">
            Empowering
            <br /> Possibilities with <br />
            <span className="text-[#F1D578]">Artificial Intelligence</span>
          </h2>
          <p className="font-normal text-base leading-9">
            The digital revolution where innovation meets excellence “I
            visualize a time when we will be to robots what dogs are to humans,
            and I’m rooting for the machines.”
          </p>
        </div>
      </div>
      <div className="flex items-center  gap-6 md:flex-row flex-col mt-9 w-[85%]">
        <p className="font-normal text-base leading-9">
          You have to talk about ‘The Terminator’ if you’re talking about
          artificial intelligence. I actually think that that’s way off. I don’t
          think that an artificially intelligent system that has superhuman
          intelligence will be violent. I do think that it will disrupt our
          culture.
        </p>
        <img
          ref={imageTwoRef}
          src={aboutpagesectionfiveimageone}
          alt=""
          className={`w-[85%] sm:w-[45%] rounded-lg transition-all duration-1000
        ${
          isImageTwoInView
            ? "translate-x-0 opacity-100"
            : "translate-x-28 opacity-0"
        }`}
        />
      </div>
      <div className="font-normal w-[85%] mt-8">
        <p className="leading-9 text-base">
          At the heart of every breakthrough lies curiosity—the desire to see
          what’s possible beyond limits. Our journey began with a simple idea:
          What if machines could think, learn, and collaborate with us to solve
          humanity’s toughest challenges? From that spark, we set out to harness
          the power of artificial intelligence, not to replace human potential
          but to amplify it
        </p>
        <p className="leading-9 mt-8 text-base">
          Today, AI isn’t just technology; it’s a partner. It helps doctors save
          lives, empowers businesses to make smarter decisions, and brings
          creativity to new heights. We believe in a future where innovation is
          driven by human imagination and AI working hand in hand—making life
          smarter, simpler, and infinitely more connected.
        </p>
      </div>
    </div>
  );
};

export default SectionFive;
