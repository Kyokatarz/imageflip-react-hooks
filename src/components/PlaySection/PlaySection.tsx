import React, { useEffect, useState } from "react";
import useRandom from "../../hooks/useRandom";

import { skillImg } from "../../source";
import { CardType } from "../../types/CardType";

import Card from "../Card/index";
import "./PlaySection.scss";

const PlaySection = () => {
  const [cardConfig, setCardConfig] = useState<CardType[]>([]);
  const randomizedCards = useRandom([...skillImg, ...skillImg]); // Add another copy of the array to shuffle
  const renderCards = randomizedCards.map((obj) => (
    <Card
      id={obj.id}
      uniqueId={obj.uniqueId}
      key={Math.random()}
      url={obj.url}
    />
  ));

  useEffect(() => {
    console.log(randomizedCards);

    setCardConfig(randomizedCards);
  }, [setCardConfig]);

  return <div className="Card-container">{renderCards}</div>;
};

export default PlaySection;
