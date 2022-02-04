import SummaryForm from "./index";
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Initial rendering", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button");

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
  userEvent.click(checkbox);
  expect(button).toBeEnabled();

  // enabled button(second click)
  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  // popover starts out hidden;
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/Terms and Conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});

// test("popover responds to hover", () => {
//   render(<SummaryForm />);
//   const nullPopover = screen.queryByText(
//     /no ice cream will actually be delivered/i
//   );
//   // popover starts out hidden;
//   expect(nullPopover).not.toBeInTheDocument();

//   // popover appears upon mouseover of checkbox label
//   const termsAndConditions = screen.getByText(/Terms and Conditions/i);
//   userEvent.hover(termsAndConditions);

//   const popover = screen.getByText(/no ice cream will actually be delivered/);
//   expect(popover).toBeInTheDocument();

//   // popover disappears when we mouse out
//   userEvent.unhover(termsAndConditions);
//   const nullPopoverAgain = screen.queryByText(
//     /no ice cream will actually be delivered/i
//   );
//   expect(nullPopoverAgain).not.toBeInTheDocument();
// });
