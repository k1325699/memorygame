import { imageData } from "@/data/imageData";
import { useEffect, useState } from "react";

const Card = ({ cardState, handleClick }) => {
  const { id, turned, number } = cardState;
  // const [imageUrl, setImageUrl] = useState(null);
  // useEffect(() => {
  //   setImageUrl(imageData[number]);
  // }, []);
  const imageURL = imageData[number];
  return (
    <div
      className={`card w-[14%] mx-[1%]  pb-[21%] rounded-2xl  relative  transform duration-300 ${
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
