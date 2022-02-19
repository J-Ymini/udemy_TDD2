import React from "react";

import Options from "../Options";

const OrderEntry = () => {
  return (
    <>
      <Options optionsType="scoops" />
      <Options optionsType="toppings" />
    </>
  );
};

export default OrderEntry;
