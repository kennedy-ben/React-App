import { render } from "../../utils";
import { screen } from "@testing-library/react";
import { Photos } from "../Photo";

test("open all the photos", () => {
  render(<Photos />);
  const photoComponent = screen.getByTestId("photo-component");
  expect(photoComponent).toBeVisible();
});
