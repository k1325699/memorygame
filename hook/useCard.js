import { useEffect, useReducer, useState } from "react";

const useCard = () => {
  // init
  const pair = 6;
  const numberArray = Array.from({ length: pair }, (_, i) => i + 1);
  const commonNumberArray = [...numberArray, ...numberArray];
  const initArray = commonNumberArray.map((number, i) => {
    return { turned: false, success: false, number };
  });

  const shuffle = (array) => {
    const length = array.length;

    for (let i = length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [array[i], array[random]] = [array[random], array[i]];
    }
    return array.map((arr, i) => {
      return { ...arr, id: i };
    });
  };

  const cardReducer = (cards, action) => {
    switch (action.type) {
      case "allTurn": {
        return cards.map(({ turned, ...card }) => {
          return { ...card, turned: false };
        });
      }
      case "shuffle": {
        return shuffle(initArray);
      }
      case "turned": {
        return cards.map((card) => {
          if (card.id === action.id) return { ...card, turned: !card.turned };
          return card;
        });
      }
      case "success": {
        return cards.map((card) => {
          if (card.id === action.id1 || card.id === action.id2)
            return { ...card, success: !card.success };
          return card;
        });
      }
      case "fail": {
        return cards.map((card) => {
          if (card.id === action.id1 || card.id === action.id2)
            return { ...card, turned: !card.turned };
          return card;
        });
      }
    }
  };
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardState, dispatch] = useReducer(cardReducer, initArray);
  const [end, setEnd] = useState(false);
  useEffect(() => {
    dispatch({ type: "shuffle" });
  }, []);
  // const [cardState, setCardState] = useState(initArray);
  const handleShuffle = () => {
    setEnd(false);
    dispatch({ type: "allTurn" });
    setTimeout(() => {
      dispatch({ type: "shuffle" });
    }, 300);
  };
  const handleClickCard = (id) => {
    if (cardState[id].turned) return;
    if (isProcessing) return;
    setIsProcessing(true);
    dispatch({ type: "turned", id: id });
    const turnedCard = cardState.filter((card) => card.turned);
    if (turnedCard.length === pair * 2 - 1) {
      setTimeout(() => {
        setEnd(true);
      }, 300);
    }
    if (turnedCard.length % 2 === 1) {
      setTimeout(() => {
        judgmentCard(id);
        setIsProcessing(false);
      }, 700);
      return;
    }
    setIsProcessing(false);
  };
  const judgmentCard = (id) => {
    const pairCard = cardState.filter((card) => !card.success && card.turned);
    if (pairCard[0].number === cardState[id].number) {
      dispatch({ type: "success", id1: id, id2: pairCard[0].id });
      return;
    }
    dispatch({ type: "fail", id1: id, id2: pairCard[0].id });
  };

  return { end, cardState, handleClickCard, handleShuffle };
};

export default useCard;
