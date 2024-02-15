import { render } from "../../utils";
import { screen } from "@testing-library/react";
import { Album } from "../album";

test("show the albums", () => {
  render(<Album />);

  const albumComponent = screen.getByTestId("albumComponent");
  expect(albumComponent).toBeVisible();
});
