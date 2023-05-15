import { imageData } from "@/data/imageData";
import { isMobile } from "react-device-detect";

const Card = ({ cardState, handleClick, isLandscape }) => {
  const { id, turned, number } = cardState;
  const imageURL = imageData[number];
  return (
    <div
      className={`card    mx-[1%]   rounded-2xl  relative  transform duration-300 ${
        turned ? "open" : ""
      } ${isLandscape ? "w-[14%] pb-[21%]" : "w-[23%] pb-[34.5%] "}`}
      onClick={() => handleClick(id)}
    >
      <div className="back absolute w-full h-full bg-black  rounded-2xl "></div>
      <div
        className="front absolute w-full h-full bg-white rounded-2xl p-5  bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
    </div>
  );
};

export default Card;
