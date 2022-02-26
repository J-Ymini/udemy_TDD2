import { createContext, useContext, useState, useMemo, useEffect } from "react";

// @ts-ignore
const OrderDetail = createContext();

// create custom hook to check whether we're inside a provider

const useOrderDetail = () => {
  const context = useContext(OrderDetail);

  if (!context) {
    throw new Error(
      "useOrderDetail must be used within an OrderDetailProvider"
    );
  }

  return context;
};

const OrderDetailProvider = (props: unknown) => {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const [totals, setTotals] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  });

  // useEffect(() => {
  //   const scoopsSubtotal = calculateSubtotal("scoops", optionCounts);
  //   const toppingSubtotal = calculateSubtotal("toppings", optionCounts);
  //   const grandTotal = scoopsSubtotal + toppingSubtotal;
  //   setTotals({
  //     scoops: scoopsSubtotal,
  //     toppings: toppingSubtotal,
  //     grandTotal: grandTotal,
  //   });
  // }, [optionCounts]);

  const value = useMemo(() => {
    const updateItemCount = (
      itemName: string,
      newItemCount: number,
      optionType: string
    ) => {
      const newOptionCounts = { ...optionCounts };

      // update option count for this item with the new value
      const optionCountMap =
        optionCounts[optionType as keyof typeof optionCounts];
      optionCountMap.set(itemName, newItemCount.toString());

      setOptionCounts(newOptionCounts);
    };

    // getter: object containing option counts for scoops and toppings, subtotals and totals
    //  setter: updateOptionCount
    return [{ ...optionCounts }, updateItemCount];
  }, [optionCounts]);

  return <OrderDetail.Provider value={value} {...props} />;
};
