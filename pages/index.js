import Image from "next/image";
import { Inter } from "next/font/google";
import useCard from "@/hook/useCard";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { cardState, handleClickCard, handleShuffle } = useCard();
  return (
    <div className="min-h-screen bg-desk px-[50px] py-4 flex flex-wrap justify-between items-center">
      {/* <Card />
       */}
      {/* <div className="w-[300px] h-[200px] bg-black"></div> */}
      {cardState.map((cardState, i) => (
        <Card key={i} cardState={cardState} handleClick={handleClickCard} />
      ))}
      <button onClick={handleShuffle}>洗牌</button>
    </div>
  );
}
