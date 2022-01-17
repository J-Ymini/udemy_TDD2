import SummaryForm from "./index";
import { screen, render, fireEvent } from "@testing-library/react";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button");

  // first render
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button");

  // disabled button(first click)
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  // enabled button(second click)
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
