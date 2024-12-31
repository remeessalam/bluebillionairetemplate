import aboutpagesectionsixbg from "../../../assets/images/aboutpagesectionsixbg.png";
import Button from "../../../component/Button/Button";
const SectionSix = () => {
  return (
    <div
      className="flex mt-12 flex-col justify-center items-center md:w-[95%] lg:w-[80%] text-white w-full mx-auto h-[345px] bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutpagesectionsixbg})` }}
    >
      <div>
        <h2 className="text-[50px] font-medium">Join our team</h2>
      </div>
      <div>
        <p className="text-base text-[#BABCC6] max-w-[500px] text-center">
          Join [your company name] and help create innovative solutions in a
          team that values creativity, collaboration, and growth.
        </p>
      </div>
      <div className="flex justify-between pl-4 pr-1 py-1 items-center w-[95%] mt-5 sm:w-[60%] border rounded-lg">
        <input
          type="text"
          className="bg-transparent w-[60%] border-none focus:outline-none focus:ring-0 truncate"
          placeholder="Enter your email address"
        />
        {/* <Link to="/contactus"> */}
        <Button buttonName="Join us" border={true} />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default SectionSix;
