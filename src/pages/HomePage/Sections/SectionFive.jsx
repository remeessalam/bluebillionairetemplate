import { useInView } from "react-intersection-observer";
import profileImage from "../../../assets/images/profileimage.jpeg";
import vector from "../../../assets/svg/vector.svg";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
const animation = { duration: 50000, easing: (t) => t };

let testimonialsUser = [
  {
    name: "Emma Thompson",
    designation: "COO - TechWorld",
    text: "BlueBillionaire.ai revolutionized our inventory management. Managing stock manually was exhausting. Now, with their automated system, we save hours weekly and accuracy has greatly improved across all departments.",
  },
  {
    name: "Liam Roberts",
    designation: "Director - ProEquip",
    text: "The custom software by BlueBillionaire.ai streamlined our entire inventory. Errors are significantly reduced, and our operations are now faster and far more reliable.",
  },
  {
    name: "Nina Patel",
    designation: "CEO - StyleFurnish",
    text: "Stock discrepancies used to slow us down. BlueBillionaire.ai’s automated solution brings reliability to our entire process, enhancing workflow significantly.",
  },
  {
    name: "George Kim",
    designation: "COO - BrightGoods",
    text: "BlueBillionaire.ai created exactly what our inventory process needed. Their solution eliminated manual work and increased efficiency, allowing us to prioritize growth.",
  },
  {
    name: "Olivia Wright",
    designation: "Manager - EcoMart",
    text: "BlueBillionaire.ai simplified inventory management for us. Their custom solution eliminated errors and saved us valuable time, boosting operational accuracy.",
  },
  {
    name: "Nathan Green",
    designation: "Logistics Head - CraftNest",
    text: "Working with BlueBillionaire.ai optimized our inventory. Their automated solution replaced outdated manual processes, enhancing efficiency and saving time.",
  },
  {
    name: "Sophia White",
    designation: "Owner - MinimalistHome",
    text: "BlueBillionaire.ai’s software has been transformative. Automating inventory has cut down errors, allowing us to focus on business growth.",
  },
  {
    name: "Lucas Brown",
    designation: "GM - AllYearSupply",
    text: "The software developed by BlueBillionaire.ai automated our inventory process, eliminating errors and saving us precious time.",
  },
  {
    name: "Mia Carter",
    designation: "CEO - GreenMarket",
    text: "BlueBillionaire.ai's solution has revolutionized inventory management. Automation saved us countless hours and greatly improved operational efficiency.",
  },
  {
    name: "James Evans",
    designation: "VP - SwiftLogistics",
    text: "BlueBillionaire.ai’s system was ideal for our inventory needs. Automation reduced errors and freed up time for critical business tasks.",
  },
];

const testimonialsUserTwo = [
  {
    name: "Chloe Williams",
    designation: "COO - SmartShop",
    text: "Partnering with BlueBillionaire.ai transformed our inventory process. Previously, stock management was tedious. Now, automation has saved us hours and greatly improved accuracy.",
  },
  {
    name: "Owen Brown",
    designation: "Logistics - EquipPro",
    text: "BlueBillionaire.ai’s software simplified inventory management. Errors are significantly reduced, making our operations much faster and more effective.",
  },
  {
    name: "Sophia Lee",
    designation: "CEO - LuxeLiving",
    text: "We struggled with stock discrepancies, but BlueBillionaire.ai’s automated solution streamlined everything. It’s invaluable for our efficiency.",
  },
  {
    name: "Leo Harris",
    designation: "COO - EssentialGoods",
    text: "BlueBillionaire.ai delivered exactly what we needed. Their system made inventory management efficient and automated, allowing us to focus on growth.",
  },
  {
    name: "Ava Perez",
    designation: "Manager - GreenLife",
    text: "Thanks to BlueBillionaire.ai, our inventory is now seamless. Their solution eliminated errors and saved us time, boosting operational efficiency.",
  },
  {
    name: "Daniel Moore",
    designation: "Logistics - CraftBox",
    text: "BlueBillionaire.ai’s automated solution optimized our inventory processes. It replaced outdated methods, saving us time and improving workflow.",
  },
  {
    name: "Emma Scott",
    designation: "Owner - UrbanSpace",
    text: "BlueBillionaire.ai’s software has been incredible. Automating inventory management reduced errors and allowed us to focus on business growth.",
  },
  {
    name: "Ethan Clark",
    designation: "GM - AllSeasons",
    text: "BlueBillionaire.ai’s automated software improved our inventory workflow, replacing our tedious, error-prone manual process with efficiency.",
  },
  {
    name: "Amelia Hill",
    designation: "CEO - PureOrganics",
    text: "BlueBillionaire.ai's solution transformed our inventory. Automation saved us countless hours, reduced errors, and enhanced our operations.",
  },
  {
    name: "Alex Turner",
    designation: "VP - SpeedTrans",
    text: "Choosing BlueBillionaire.ai’s system was ideal for us. Inventory automation reduced errors, streamlined processes, and allowed our team to focus on growth.",
  },
];

const SectionFive = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, false, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 954px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 650px)": {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
    },
  });
  const [sliderRefTwo] = useKeenSlider({
    loop: true,
    rtl: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, false, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 954px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 650px)": {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
    },
  });
  const { ref: refOne, inView: inViewOne } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: refTwo, inView: inViewTwo } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    // md:w-[95%] lg:w-[80%]
    <div className=" w-screen mx-auto flex-col flex items-center mt-20 text-white">
      <div>
        <h3
          ref={refOne}
          className={`text-[#F5F5F5] text-[10px] w-fit rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white z-10 transition-transform duration-500 ease-out ${
            inViewOne ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {"Testimonials".toUpperCase()}
        </h3>
      </div>
      <div className="mt-2">
        <h3
          ref={refTwo}
          className={`text-[54px] text-center leading-[65px] transition-transform delay-200 duration-500 ease-out ${
            inViewTwo ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Hear what our customers
          <br /> have to say about us
        </h3>
      </div>
      {/* <div className="flex flex-col mt-28"> */}
      <div
        ref={sliderRef}
        className="mt-28 relative w-screen  flex keen-slider"
      >
        <div className="absolute hidden md:block top-0 left-0 w-56 h-[254px]  bg-gradient-to-r from-[#080719] to-transparent pointer-events-none z-10" />
        {testimonialsUser.map((obj, idx) => (
          <div
            key={idx}
            className="keen-slider__slide  max-h-[228px] p-4 bg-[#0E0E21] rounded-md"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-3">
                <img
                  src={profileImage}
                  alt="profileImage"
                  className="rounded-full h-10"
                  width={40}
                />
                <div className="max-w-[80%] truncate">
                  <h2>{obj.name}</h2>
                  <p className="font-normal text-sm text-[#858892]  truncate">
                    {obj.designation}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center shadow-9xl shadow-white min-w-8 min-h-8 rounded-full border border-[#3D96FF]">
                <img src={vector} alt="vector" className="w-fit h-fit" />
              </div>
            </div>
            <div className="mt-2">
              <p className="font-normal text-base text-[#BABCC6] leading-2">
                {obj.text}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute hidden md:block top-0 right-0 w-56 h-[254px] bg-gradient-to-l from-[#080719] to-transparent pointer-events-none z-10" />
      </div>
      <div
        ref={sliderRefTwo}
        className="mt-12 w-screen  relative flex keen-slider"
      >
        <div className="absolute hidden md:block top-0 left-0 w-56 h-[254px] bg-gradient-to-r from-[#080719] to-transparent pointer-events-none z-10" />

        {testimonialsUserTwo.map((obj, idx) => (
          <div
            key={idx}
            className="keen-slider__slide  p-4 bg-[#0E0E21] rounded-md"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex gap-3">
                <img
                  src={profileImage}
                  alt="profileImage"
                  className="rounded-full h-10"
                  width={40}
                />
                <div className="max-w-[80%] truncate">
                  <h2>{obj.name}</h2>
                  <p className="font-normal text-sm text-[#858892]  truncate">
                    {obj.designation}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center shadow-9xl shadow-white min-w-8 min-h-8 rounded-full border border-[#3D96FF]">
                <img src={vector} alt="vector" className="w-fit h-fit" />
              </div>
            </div>
            <div className="mt-2">
              <p className="font-normal text-base text-[#BABCC6] leading-2">
                {obj.text}
              </p>
            </div>
          </div>
        ))}
        <div className="absolute hidden md:block top-0 right-0 w-56 h-[254px] bg-gradient-to-l from-[#080719] to-transparent pointer-events-none z-10" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default SectionFive;
