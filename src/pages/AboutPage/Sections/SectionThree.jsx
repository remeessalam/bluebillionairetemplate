import { useInView } from "react-intersection-observer";
import userimage from "../../../assets/images/dummyimage.jpg";
import userimage2 from "../../../assets/images/dummyimage.jpg";
import linkedinvector from "../../../assets/svg/linkedinvector.svg";
const SectionThree = () => {
  const { ref: refOne, inView: inViewOne } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <div className="flex items-center flex-col text-white mt-12">
      <div>
        <h3 className="text-[#F5F5F5] text-[10px] w-fit rounded-full border px-[18px] py-[10px] shadow-8xl shadow-white z-10">
          {"our team".toUpperCase()}
        </h3>
      </div>
      <div
        ref={refOne}
        className={`transition-transform duration-500 ease-out ${
          inViewOne ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <h2 className="text-[38px] text-center leading-[45px] mt-4 font-extrabold">
          Meet the team
          <br /> behind
          <span className="text-[#F1D578]"> [your company name]</span>
        </h2>
      </div>
      <div className="flex md:flex-row flex-col gap-5 mt-12">
        <div className="bg-aboutas-gradient w-[300px] sm:w-[370px]">
          <img
            src={userimage}
            alt="userimage"
            className="w-[300px] sm:w-[370px]"
          />
          <div className="flex flex-col px-5 items-center py-3">
            <h3 className="flex w-full gap-3 justify-center items-center text-[#F1D578]  font-bold text-xl">
              David
              <span className="w-8 h-8 flex justify-center items-center">
                <img src={linkedinvector} alt="" />
              </span>
            </h3>
            <p className="text-center text-2xl font-bold">
              Ceo/Chairman/Founder of <br />
              abc.ai
            </p>
          </div>
        </div>
        <div className="bg-aboutas-gradient w-[300px] sm:w-[370px]">
          <img
            src={userimage2}
            alt="userimage"
            className="w-[300px] sm:w-[370px]"
          />
          <div className="flex flex-col px-5 items-center py-3">
            <h3 className="flex w-full gap-3 justify-center items-center text-[#F1D578]  font-bold text-xl">
              Rayan
              <span>
                <img src={linkedinvector} alt="" />
              </span>
            </h3>
            <p className="text-center text-2xl font-bold">
              Legal Head of <br />
              abc.ai
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center mt-5 items-center   py-6 mx-0"
        // style={{ backgroundImage: `url(${aboutpagegif})` }}
      >
        <ul className="flex flex-col gap-4 text-[#BABCC6] font-normal text-base w-[90%] sm:w-[70%]">
          <li>
            · happy journey in the world of artificial intelligence can be
            traced back to his formative years and academic pursuits. Born on
            June 27, 1994, Ahmed pursued a Bachelor of Science degree in Visual
            Communication, which gave him an interdisciplinary foundation in
            both design and technology.
          </li>
          <li>
            · His education played a crucial role in shaping his understanding
            of how technology and creativity can intersect, and this influenced
            his future career path in AI. Visual Communication, a discipline
            that integrates elements of both technology and design, offered
            Ahmed insights into problem-solving through technology—a skillset
            that became essential in his work as CEO of [your company name].
          </li>
          <li>
            · According to Ahmed, the combination of these two fields helped him
            approach AI development from a unique perspective, focusing on both
            the user experience and the technical functionality of the systems
            his company creates. Today, he is recognized for leveraging this
            blend of knowledge to innovate AI-based products and solutions that
            cater to multiple industries.
          </li>
          <li>
            · Ahmed’s academic background continues to inform the way he leads
            his company, making his approach to AI distinctive in the
            competitive tech market.
          </li>
          <li>
            · Healthcare management is undergoing a significant transformation,
            and [your company name], led by CEO Abuzar, is at the forefront of
            this change. The company has developed innovative artificial
            intelligence (AI) tools designed to address the complexities of
            healthcare administration, specifically in managing patient data and
            improving operational efficiency.
          </li>
          <li>
            · One of the most notable solutions [your company name] offers is
            its automation software, which is used to streamline the management
            of vast amounts of patient data. In many hospitals and healthcare
            facilities, the manual handling of patient records has historically
            led to inefficiencies and errors. With [your company name]’s
            AI-driven automation, healthcare providers can now store, access,
            and manage patient data with greater accuracy and speed.
          </li>
          <li>
            · In addition to data management, the company’s predictive analytics
            platforms are helping healthcare institutions make more informed
            decisions. By analyzing trends in patient care and medical outcomes,
            these AI tools provide insights that allow healthcare professionals
            to anticipate challenges and plan more effectively for the future.
          </li>
          <li>
            · Abuzar’s focus on practical AI applications has enabled [your
            company name] to bring meaningful innovations to the healthcare
            sector, positioning the company as a leader in AI-driven solutions
            for healthcare management.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionThree;
