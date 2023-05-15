import useCard from "@/hook/useCard";
import Card from "@/components/Card";
import End from "@/components/End";
import useResponse from "@/hook/useResponse";
import Loading from "@/components/Loading";

export default function Home() {
  const { end, cardState, handleClickCard, handleShuffle } = useCard();
  const { isLandscape, loading } = useResponse();
  return (
    <div
      className={`overflow-hidden min-h-screen bg-desk py-4 flex flex-wrap justify-between items-center ${
        isLandscape ? "px-[50px]" : "px-3"
      }`}
    >
      {loading ? <Loading /> : null}
      {cardState.map((cardState, i) => (
        <Card
          key={i}
          cardState={cardState}
          handleClick={handleClickCard}
          isLandscape={isLandscape}
        />
      ))}
      {end ? <End handleClick={handleShuffle} /> : null}
    </div>
  );
}
