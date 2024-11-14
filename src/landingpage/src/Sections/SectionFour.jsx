import { Link } from "react-router-dom";
import Button from "../Components/Button/Buttton";

export const SectionFour = () => {
  return (
    <div className="flex justify-center items-center mt-28">
      <div className="flex flex-col gap-6 w-full md:w-1/2 px-5 md:px-0">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/2">
            <h3>Full name</h3>
            <div className="border border-[#505362] rounded-lg mt-2">
              <input
                type="text"
                placeholder="John Carter"
                className="py-4 w-full  pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3>Email address</h3>
            <div className="border border-[#505362] rounded-lg mt-2">
              <input
                type="email"
                placeholder="example@youremail.com"
                className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-1/2">
            <h3>Phone number</h3>
            <div className="border border-[#505362] rounded-lg mt-2">
              <input
                type="number"
                placeholder="(123) 456 - 7890"
                className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3>Company</h3>
            <div className="border border-[#505362] rounded-lg mt-2">
              <input
                type="text"
                placeholder="ex. Google"
                className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full">
            <h3>Message</h3>
            <div className="border border-[#505362] min-h-40 rounded-lg mt-2">
              <textarea
                className="py-4 w-full pl-4 bg-transparent border-none focus:outline-none focus:ring-0 resize-none"
                rows="4"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-0">
          <div>
            {/* <Link to="/contactus"> */}
            <Button buttonName="Send Message" border={true} />
            {/* </Link> */}
          </div>
          {/* <div className="flex gap-2 pr-0 lg:pr-8">
        <img src={roundedfacebook} alt="roundedfacebook" />
        <img src={roundedtwitter} alt="roundedtwitter" />
        <img src={roundedinstagram} alt="roundedinstagram" />
        <img src={roundedlinkedin} alt="roundedlinkedin" />
      </div> */}
        </div>
      </div>
    </div>
  );
};
