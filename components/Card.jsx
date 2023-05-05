const Card = ({ cardState, handleClick }) => {
  const { id, turned, number } = cardState;
  return (
    <div
      className={`card w-[14%] mx-[1%]  pb-[21%] rounded-2xl  relative  transform duration-300 ${
        turned ? "open" : ""
      }`}
      onClick={() => handleClick(id)}
    >
      <div className="back absolute w-full h-full bg-black text-white rounded-2xl p-5"></div>
      <div className="front absolute w-full h-full bg-white rounded-2xl p-5 flex justify-center items-center text-4xl">
        {number}
      </div>
    </div>
  );
};

export default Card;
