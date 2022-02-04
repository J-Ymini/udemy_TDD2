import { screen, render } from "@testing-library/react";

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
