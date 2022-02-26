import { screen, render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import Options from ".";

type ImageElementList = HTMLImageElement[];

test("displays image for each scoop option from server", async () => {
  render(<Options optionsType="scoops" />);
  // find images
  const scoopImages: ImageElementList = await screen.findAllByRole("img", {
    name: /scoop$/i,
  });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionsType="toppings" />);

  // find images
  const toppingImages: ImageElementList = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  const altText = toppingImages.map((element) => element.alt);

  expect(altText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});

test("update scoop subtotal when scoops change", async () => {
  render(<Options optionsType="scoops" />);

  // make sure total starts out $0.00

  const scoopsSubtotalPrice = screen.getByText("scoops total: $", {
    exact: false,
  });
  expect(scoopsSubtotalPrice).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, "1");

  expect(scoopsSubtotalPrice).toHaveTextContent("2.00");

  // update chocolate scoops to 2 and check subtotal

  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });

  userEvent.clear(chocolateInput);
  userEvent.type(chocolateInput, "2");

  expect(scoopsSubtotalPrice).toHaveTextContent("6.00");
});
