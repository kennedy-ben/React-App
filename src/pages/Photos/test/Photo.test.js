import { render } from "../../utils";
import { screen } from "@testing-library/react";
import { Photo } from "../Photo";

test("open all the photos", () => {
  render(<Photo />);
  const photoComponent = screen.getByTestId("photo-component");
  expect(photoComponent).toBeVisible();
});
