import { imageData } from "@/data/imageData";

const Card = ({ cardState, handleClick }) => {
  const { id, turned, number } = cardState;
  const imageURL = imageData[number];
  return (
    <div
      className={`card w-[23%]  md:w-[14%] mx-[1%] pb-[34.5%]  md:pb-[21%] rounded-2xl  relative  transform duration-300 ${
        turned ? "open" : ""
      }`}
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
