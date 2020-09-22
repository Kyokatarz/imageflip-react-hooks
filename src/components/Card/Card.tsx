import React from "react";
import { cardBack } from "../../source";

import { CardType } from "../../types/CardType";
import "./Card.scss";

const Card: React.FC<CardType> = ({ url, id, uniqueId }) => {
  const flip = () => {};
  return (
    <div className={`Card-wrap Card-${id}`}>
      <div className={`Card `}>
        <div className="Card__Front">
          <img src={url} alt="" />
        </div>

        <div className="Card__Back">
          <img src={cardBack} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
