import React from "react";
import { skillImg, cardBack } from "../../source";

import Card from "../Card/Card";

const PlaySection = () => {
  const renderCards = skillImg.map((obj) => (
    <Card uniqueId={obj.uniqueId} url={obj.url} />
  ));

  return <div>{renderCards}</div>;
};

export default PlaySection;
