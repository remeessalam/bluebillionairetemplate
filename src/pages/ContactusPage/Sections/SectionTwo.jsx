import { useState } from "react";
import plus from "../../../assets/svg/plus.svg";

let questions = [
  {
    question: " What services do you offer to help build an AI company?",
    answer:
      "We provide end-to-end services, including AI strategy consultation, product development, business model creation, and market entry support. We guide you from ideation to product launch.",
  },
  {
    question: " Do I need technical knowledge to start an AI company?",
    answer:
      "No, you don’t need technical expertise. Our team of AI experts will handle the technical aspects while you focus on the business vision and strategy.",
  },
  {
    question: "How long does it take to launch an AI product?",
    answer:
      "The timeline varies, but typically it takes 3 to 6 months to develop a Minimum Viable Product (MVP) and begin the launch process.",
  },
  {
    question: "How do I know if my AI idea is feasible?",
    answer:
      "We offer an initial consultation to evaluate your idea's feasibility, its market potential, and provide feedback on how to refine it for success.",
  },
  {
    question: "What types of AI solutions can you help develop?",
    answer:
      "We help build various AI solutions, including chatbots, recommendation systems, computer vision applications, and more. We tailor each project to your unique needs.",
  },

  {
    question: "What kind of data is required to build an AI solution?",
    answer:
      "AI solutions require high-quality data, depending on the project. We assist in collecting, preprocessing, and using relevant data for training the model.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply schedule a free consultation with us to discuss your idea. We will outline how we can help turn your vision into a successful AI company.",
  },
];
const SectionTwo = () => {
  const [open, setOpen] = useState();
  return (
    <div className="flex w-full mt-20 text-white mx-auto min-h-[90vh] bg-cover bg-center py-7">
      <div className="w-full">
        <h2 className="text-center  font-semibold text-4xl">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="flex flex-col gap-4 items-center w-[100%] sm:w-[70%] mt-12 mx-auto px-4">
          {questions.map((q, index) => (
            <div
              key={q}
              className="flex w-full gap-3 sm:gap-6 items-center"
              onClick={() => setOpen((pre) => (pre === index ? "" : index))}
            >
              <div className={` w-full  py-4 rounded-md pl-6 bg-[#050E15]`}>
                <h3 className="font-semibold text-base">{q.question} </h3>
                {index === open && (
                  <p className="mt-4 text-base text-[#BABCC6]">{q.answer}</p>
                )}
              </div>
              <img
                src={plus}
                alt="plus"
                className={`w-4 h-4 ${
                  index === open ? `-rotate-45 ` : ``
                }transition-transform duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
