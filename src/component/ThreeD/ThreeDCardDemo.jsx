import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
// import Link from "next/link";

const ThreeDCardDemo = ({ img, style }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full h-full">
          <img
            src={img}
            // height={height}
            // width={width}
            className={` { ${style} object-cover rounded-xl group-hover/card:shadow-xl`}
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

// import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
export default ThreeDCardDemo;
