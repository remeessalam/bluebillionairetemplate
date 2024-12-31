// import imageone from "../../../assets/png/sectioneightimageone.png";
// import imagetwo from "../../../assets/png/sectioneightimagetwo.png";
// import imagethree from "../../../assets/png/sectioneightimagethree.png";
import abuzar from "../../../assets/images/dummyimage.jpg";
import abuzartwo from "../../../assets/images/dummyimage.jpg";
import sectioneifhtbg from "../../../assets/images/sectioneifhtbg.jpeg";
import Button from "../../../component/Button/Button";
// import Button from "../../../component/Button/Button";

const SectionEight = () => {
  return (
    <div className="md:w-[95%] lg:w-[80%] w-full mx-auto text-white flex-col flex items-center mt-28">
      <div>
        {" "}
        <h3 className="text-[#F5F5F5] text-[10px] w-fit rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white z-10">
          {"over blog".toUpperCase()}
        </h3>
      </div>
      <div>
        <h3 className="text-[54px] text-center leading-[65px]">
          News & articles
        </h3>
      </div>
      <div>
        <p className="font-normal md:max-w-[515px] text-center sm:px-0 px-5 text-base text-[#BABCC6] leading-6">
          Stay updated with the latest insights, trends, and stories. Discover
          articles that bring you closer to the world of innovation and industry
          developments.
        </p>
      </div>
      <div className="flex mb-10 w-full flex-wrap  lg:flex-nowrap justify-center mt-10 gap-10">
        <div className="w-[80%] md:w-1/3 relative pb-7 bg-[#09091b] hover:scale-105 cursor-pointer transition-all duration-300 rounded-lg overflow-hidden">
          <div className="w-full relative">
            <img src={sectioneifhtbg} alt="bg" className="absolute -z-10" />
            <img
              src={abuzar}
              alt="AI feature"
              className="max-h-[255px] object-cover w-full"
            />
          </div>
          <div className="px-5 mt-10">
            <div className="flex items-center text-sm font-normal text-[#BABCC6]">
              <h4 className="border-r  border-[#BABCC6] pr-3 leading-4 h-[15px]">
                Company
              </h4>
              <h4 className="pl-3">Oct 21, 2024</h4>
            </div>
            <p className="text-base font-medium mt-3">
              [your company name] AI Tools Revolutionize Healthcare Management
            </p>
          </div>
          <div className="w-full flex justify-center mt-4">
            <button
              className={
                "border w-[90%] border-[#505362] text-white   rounded-lg px-[25px] py-[8px] font-normal text-base transition-transform duration-200 hover:scale-105"
              }
            >
              Learn more
            </button>
          </div>
          <div className="absolute bottom-1 left-[28px] h-[.5px]  w-[80%] bg-custom-radial opacity-55" />
        </div>

        <div className="flex flex-col justify-between bg-[#09091b] w-[80%] hover:scale-105 cursor-pointer transition-all duration-300 md:w-1/3 relative pb-7 rounded-lg overflow-hidden ">
          <div className="w-full relative">
            <img src={sectioneifhtbg} alt="bg" className="absolute -z-10" />
            <img
              src={abuzartwo}
              alt="AI feature"
              className="max-h-[255px] object-cover w-full"
            />
          </div>
          <div className="px-5 mt-10">
            <div className="flex items-center text-sm font-normal text-[#BABCC6]">
              <h4 className="border-r  border-[#BABCC6] pr-3 leading-4 h-[15px]">
                Company
              </h4>
              <h4 className="pl-3">Oct 21, 2024</h4>
            </div>
            <p className="text-base font-medium mt-3">
              How hogan Education Shaped His AI Career
            </p>
          </div>
          <div className="w-full flex justify-center mt-4">
            <button
              className={
                "border w-[90%] border-[#505362] text-white   rounded-lg px-[25px] py-[8px] font-normal text-base transition-transform duration-200 hover:scale-105"
              }
              // onClick={() =>
              //   window.open(
              //     "https://entrepreneurstreet.in/how-abuzars-education-shaped-his-ai-career/"
              //   )
              // }
            >
              Learn more
            </button>
          </div>
          <div className="absolute bottom-1 left-[28px] h-[.5px]  w-[80%] bg-custom-radial opacity-55" />
        </div>
        {/* <div className="  w-[80%] md:w-1/3 relative pb-7 rounded-lg overflow-hidden">
          <div className="w-full relative">
            <img src={sectioneifhtbg} alt="bg" className="absolute -z-10" />
            <img src={imagethree} alt="AI feature" />
          </div>
          <div className="px-5 mt-10">
            <div className="flex items-center text-sm font-normal text-[#BABCC6]">
              <h4 className="border-r  border-[#BABCC6] pr-3 leading-4 h-[15px]">
                News
              </h4>
              <h4 className="pl-3">Aug 8, 2023</h4>
            </div>
            <p className="text-base font-medium mt-3">
              What are the new NLP tools and how are they used?{" "}
            </p>
          </div>
          <div className="absolute bottom-1 left-[28px] h-[.5px]  w-[80%] bg-custom-radial opacity-55" />
        </div> */}
      </div>
      {/* <button className="mt-10">Browse all articles</button> */}
      {/* <Button buttonName={"Browse all articles"} /> */}
    </div>
  );
};

export default SectionEight;
