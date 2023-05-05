import Image from "next/image";
import useCard from "@/hook/useCard";
import Card from "@/components/Card";

export default function Home() {
  const { end, cardState, handleClickCard, handleShuffle } = useCard();
  return (
    <div className="min-h-screen bg-desk px-[50px] py-4 flex flex-wrap justify-between items-center">
      {cardState.map((cardState, i) => (
        <Card key={i} cardState={cardState} handleClick={handleClickCard} />
      ))}
      {end ? (
        <div className="fixed inset-0 bg-mask flex flex-col justify-center items-center">
          <div className="flex flex-col  justify-between items-center w-[300px] h-[200px] bg-white rounded-3xl py-6">
            <h2 className="text-4xl font-bold pb-6 ">成功~</h2>
            <button
              onClick={handleShuffle}
              className="text-2xl  bg-button text-white py-4 px-6 rounded-full"
            >
              重新開始
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
