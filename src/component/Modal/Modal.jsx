import { useEffect } from "react";
import PropTypes from "prop-types";

let serviceDetails = [
  {
    heading: "Game Development",
    subHeading:
      " At [your company name], we embark on a journey of innovation and creativity in the realm of game development.",
    paragraph:
      "At [your company name], we embark on a journey of innovation and creativity in the realm of game development. Our dedicated team of expert game developers is passionate about transforming visions into  reality, crafting games that captivate and engage players across all          platforms—from mobile and console to PC. In an industry where       storytelling, artistry, and technology intertwine, we believe that      gaming is an art form that can create unforgettable experiences.",

    paragraphTwo:
      "Great games start with a powerful narrative, and our talented writers at [your company name] excel in crafting immersive worlds filled with rich characters and gripping plots. We understand that players are not just looking for entertainment; they seek to be drawn into adventures that resonate on a deeper level. Our narratives are designed to pull players into unforgettable journeys, keeping them engaged from the beginning to the end. By developing multifaceted storylines and relatable characters, we ensure that each game offers a unique experience that leaves a lasting impact.",
  },
  {
    heading: "Blockchain Developemnt",
    subHeading:
      " At [your company name], we are at the forefront of blockchain development, harnessing the transformative power of this groundbreaking technology.",
    paragraph:
      "Blockchain technology is more than just a buzzword; it represents a paradigm shift in how data is stored, shared, and secured. At [your company name], we believe in unlocking the full potential of blockchain by creating secure and scalable solutions tailored to meet the unique needs of our clients. Whether developing smart contracts, decentralized applications (dApps), or bespoke cryptocurrency solutions, our expert team leverages the decentralized nature of blockchain to enhance operational capabilities and drive innovation.",

    paragraphTwo:
      "One of the most significant advancements brought about by blockchain technology is the concept of smart contracts. These self-executing contracts with the terms of the agreement directly written into code eliminate the need for intermediaries, reducing costs and enhancing efficiency. At [your company name], we specialize in designing and implementing secure smart contracts that facilitate trust between parties. Our meticulous approach ensures that these contracts are not only robust and secure but also aligned with our clients’ strategic objectives, enabling seamless transactions and operations.",
  },
  {
    heading: "Augmented Reality and Virtual Reality Development",
    subHeading:
      "At [your company name], we stand at the cutting edge of Augmented Reality (AR) and Virtual Reality (VR) technology, committed to transforming how businesses engage with their audiences.",
    paragraph:
      "AR and VR represent revolutionary approaches to storytelling and interaction. At [your company name], we specialize in crafting immersive experiences that captivate users, allowing them to engage with products and services in groundbreaking ways. By leveraging advanced graphics and interactive elements, we create environments that feel real and responsive, fostering a sense of presence that traditional media cannot replicate. Our team works closely with clients to understand their objectives and tailor solutions that resonate deeply with their target audiences.",

    paragraphTwo:
      "In today's competitive marketplace, customer engagement is key to driving loyalty and conversions. Our AR/VR solutions enable businesses to create interactive experiences that captivate users and encourage deeper connections with their brands. Whether through virtual showrooms, interactive product demonstrations, or gamified experiences, we empower organizations to present their offerings in ways that are not only informative but also entertaining. By immersing customers in a rich, interactive environment, businesses can create memorable impressions that influence purchasing decisions.",
  },
  {
    heading: "Custom Software Development",
    subHeading:
      "In today’s fast-paced digital landscape, off-the-shelf software solutions often fall short of meeting the specific requirements of individual businesses.",
    paragraph:
      "At [your company name], we recognize that every organization is unique, with its own set of challenges and objectives. Our custom software development services are designed to create tailored solutions that streamline operations, enhance productivity, and drive business growth, ensuring our clients remain competitive in an ever-evolving marketplace.",

    paragraphTwo:
      "The foundation of effective custom software development lies in a deep understanding of our clients’ needs. At [your company name], we prioritize collaboration, working closely with businesses to identify their specific challenges and goals. This approach allows us to gain insights into the intricacies of your operations, ensuring that the software we develop is perfectly aligned with your strategic objectives. Whether it’s automating processes, improving user experience, or enhancing data management, we are committed to delivering solutions that truly address your requirements.",
  },
  {
    heading: "IT Infrastructure Services",
    subHeading:
      "In an increasingly digital world, the robustness and reliability of your IT infrastructure play a critical role in determining the success of your business.",
    paragraph:
      "At [your company name], we specialize in providing comprehensive IT infrastructure services designed to support your growth ambitions and enhance operational efficiency. Our team of experts is dedicated to creating a solid technological foundation that empowers organizations to thrive in a competitive landscape.The journey to a resilient IT infrastructure begins with strategic planning. At [your company name], we conduct thorough assessments of your current IT environment to identify strengths, weaknesses, and opportunities for improvement.",

    paragraphTwo:
      "Once we have a strategic plan in place, our team focuses on the implementation of robust IT solutions that enhance your operational capabilities. We leverage the latest technologies and industry best practices to build a scalable and secure infrastructure that meets your business requirements. Whether it’s deploying cloud services, establishing network security protocols, or setting up data management systems, we ensure that every element of your IT infrastructure works seamlessly together.",
  },
  {
    heading: "Cyber Security Solutions",
    subHeading:
      "In an era where digital threats are omnipresent, the importance of robust cybersecurity measures cannot be overstated.",
    paragraph:
      "At [your company name], we recognize that protecting your business's sensitive information and critical infrastructure is paramount to maintaining trust, reputation, and operational continuity. Our comprehensive cybersecurity solutions are designed to empower organizations to navigate the evolving landscape of cyber threats with confidence.",

    paragraphTwo:
      "Cyber threats are becoming increasingly sophisticated, ranging from data breaches and ransomware attacks to phishing schemes and insider threats. At [your company name], we begin our cybersecurity services with a thorough understanding of the unique threats facing your industry and organization. Our team of experts conducts meticulous assessments to identify vulnerabilities within your systems, enabling us to develop targeted strategies that effectively mitigate risks.",
  },
  {
    heading: "Mobile Application Development",
    subHeading:
      "Mobile applications have revolutionized the way we interact with technology, transforming our daily lives in countless ways.",
    paragraph:
      "One of the key differences between mobile and web app development is the platform-specific nature of mobile apps. While web apps can be accessed on any device with a web browser, mobile apps are designed for specific platforms, such as iOS and Android. This necessitates developing separate versions for each platform, often using different programming languages and development environments.",

    paragraphTwo:
      "Performance is another critical factor in mobile app development. With limited processing power and battery life, mobile devices demand optimized apps that run smoothly and efficiently. Developers must carefully consider factors such as memory usage, network connectivity, and power consumption to ensure a positive user experience.",
  },
  {
    heading: "Website Application Development",
    subHeading:
      "Website application development is the process of creating interactive digital experiences that serve specific purposes. ",
    paragraph:
      "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business. The development of website applications is a complex process that involves a blend of creativity, technical expertise, and a deep understanding of user needs.",

    paragraphTwo:
      "At the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with. It encompasses the design, layout, and functionality of the website's interface. Popular front-end technologies include HTML, CSS, and JavaScript frameworks like React, Angular, and Vue.js. These tools enable developers to create visually appealing and intuitive user experiences.",
  },
  {
    heading: "IT Consulting & Services",
    subHeading:
      "IT consulting and services have become an indispensable component of modern businesses, providing expert guidance and support to navigate the complex and ever-evolving world of information technology.",
    paragraph:
      "One of the primary roles of IT consulting firms is to help businesses align their IT strategies with their overall business objectives. By conducting thorough assessments and analyses, consultants can identify areas for improvement and recommend solutions that optimize efficiency, reduce costs, and enhance competitiveness. This may involve implementing new technologies, upgrading existing systems, or restructuring IT operations.",

    paragraphTwo:
      "IT consulting firms also play a vital role in addressing the security challenges faced by businesses today. In an increasingly interconnected world, protecting sensitive data from cyber threats is crucial. Consultants can help organizations assess their security vulnerabilities, implement robust security measures, and develop incident response plans to minimize the impact of potential breaches.",
  },
];
const Modal = ({ closeModal, index }) => {
  useEffect(() => {
    // Disable background scrolling
    document.body.style.overflow = "hidden";

    // Re-enable background scrolling when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#000000a3] fixed top-0 left-0">
      <div className="relative flex w-full sm:w-3/4 flex-col overflow-y-auto h-[80vh] bg-black no-scrollbar justify-between items-center text-white py-8 px-1 sm:px-5 mt-28">
        <div
          className="fixed top-[19%] font-extrabold opacity-40 right-0 sm:right-[13%] flex justify-center items-center text-black bg-white w-8 h-8 rounded-full"
          onClick={closeModal}
        >
          x
        </div>
        <h3 className="font-bold text-center text-5xl text-[#E8BA20] py-4">
          {serviceDetails[index - 1].heading}
        </h3>
        <h5 className="font-medium text-center text-xl py-5">
          {serviceDetails[index - 1].subHeading}
        </h5>
        <p className="text-base font-normal text-center text-[#B5B3B3] py-5">
          {serviceDetails[index - 1].paragraph}
        </p>
        <p className="text-base font-normal text-center text-[#B5B3B3] py-5">
          {serviceDetails[index].paragraphTwo}
        </p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Modal;
