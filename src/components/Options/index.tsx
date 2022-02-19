import { useState } from "react";

import ScoopOption from "src/components/ScoopOption";
import ToppingOption from "src/components/ToppingOption";
import AlertBanner from "../common/AlertBanner";

import { Row } from "react-bootstrap";

import { useAxios } from "src/hooks";

interface IOptionsProps {
  optionsType: "scoops" | "toppings";
}

const Options = ({ optionsType }: IOptionsProps) => {
  // optionsType is 'scoops' or 'toppings'
  const { items, error } = useAxios(`http://localhost:3030/${optionsType}`);

  const ItemComponent = optionsType === "scoops" ? ScoopOption : ToppingOption;

  if (error) {
    return <AlertBanner />;
  }

  return (
    <Row>
      {items.map((item, index) => {
        return <ItemComponent key={index} item={item} />;
      })}
    </Row>
  );
};

export default Options;
