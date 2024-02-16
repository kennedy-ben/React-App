import { render } from "../../utils";
import { screen } from "@testing-library/react";
import { Albums } from "../albums";

test.skip("render the albums components", () => {
  render(<Albums />);
  const albumComponent = screen.getByTestId("albumComponent");
  expect(albumComponent).toBeVisible();

  const loader = screen.getByText("Loading...");
  expect(loader).toBeInTheDocument();

  // const pictureComponent = screen.getByTestId("picture-Component");
  // expect(pictureComponent).toBeChecked();
});
