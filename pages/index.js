import useCard from "@/hook/useCard";
import Card from "@/components/Card";
import End from "@/components/End";

export default function Home() {
  const { end, cardState, handleClickCard, handleShuffle } = useCard();
  return (
    <div className="min-h-screen bg-desk px-[50px] py-4 flex flex-wrap justify-between items-center">
      {cardState.map((cardState, i) => (
        <Card key={i} cardState={cardState} handleClick={handleClickCard} />
      ))}
      {end ? <End handleClick={handleShuffle} /> : null}
    </div>
  );
}
