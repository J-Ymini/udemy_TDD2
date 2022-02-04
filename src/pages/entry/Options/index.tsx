import ScoopOption from "../ScoopOption";

import { useAxios } from "src/hooks";

interface IOptionsProps {
  optionsType: "scoops" | "toppings";
}

const Options = ({ optionsType }: IOptionsProps) => {
  // optionsType is 'scoops' or 'toppings'
  const { items } = useAxios(`http://localhost:3030/${optionsType}`);
  console.log(items);

  return (
    <>
      {items.map((item, index) => {
        return <ScoopOption key={index} item={item} />;
      })}
    </>
  );
};

export default Options;
