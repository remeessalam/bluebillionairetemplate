import ReactPlayer from "react-player";
import video from "../../../assets/video/sectionsevenvideo.mp4";
const SectionSix = () => {
  return (
    <div
      className={`flex flex-col items-center mt-10 sm:mt-20 md:w-[95%] lg:w-[80%] w-full mx-auto `}
    >
      <h2 className="font-medium text-[23px] sm:text-[44px] sm:px-0 px-1 text-[#E8BA20] text-center">
        Embarking on a Journey of Data-Driven Innovation
      </h2>
      <div className="w-[90%] sm:w-[70%] mt-8">
        <ReactPlayer
          url={video}
          loop={true}
          playsinline
          playing={true}
          width="100%"
          height="100%"
          muted
        />
      </div>
    </div>
  );
};

export default SectionSix;
