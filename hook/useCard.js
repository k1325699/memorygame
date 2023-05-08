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
  // const [isProcessing, setIsProcessing] = useState(false);
  const [record, setRecord] = useState([]);
  const [cardState, dispatch] = useReducer(cardReducer, initArray);
  const [end, setEnd] = useState(false);
  useEffect(() => {
    dispatch({ type: "shuffle" });
  }, []);
  const handleShuffle = () => {
    setEnd(false);
    setRecord([]);
    dispatch({ type: "allTurn" });
    setTimeout(() => {
      dispatch({ type: "shuffle" });
    }, 300);
  };
  const handleClickCard = (id) => {
    if (cardState[id].turned) return;
    dispatch({ type: "turned", id: id });
    setRecord([...record, { number: cardState[id].number, id: id }]);
    const turnedCard = cardState.filter((card) => card.turned);
    if (turnedCard.length === pair * 2 - 1) {
      setTimeout(() => {
        setEnd(true);
      }, 300);
    }
    if (turnedCard.length % 2 === 1) {
      judgmentCard(id);
      return;
    }
  };
  const judgmentCard = (id) => {
    if (record[record.length - 1].number === cardState[id].number) {
      dispatch({ type: "success", id1: id, id2: record[record.length - 1].id });
      return;
    }
    setTimeout(() => {
      dispatch({ type: "fail", id1: id, id2: record[record.length - 1].id });
    }, 600);
  };

  return { end, cardState, handleClickCard, handleShuffle };
};

export default useCard;
