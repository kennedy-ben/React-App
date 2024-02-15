import { screen } from "@testing-library/react";
import { Header } from "../Header";
import { render } from "../../utils";

test("renders learn react link", () => {
  render(<Header />);
  const headerComponent = screen.getByTestId("header-component");
  expect(headerComponent).toBeVisible();
  expect(screen.getByTestId("users-link")).toBeVisible();

  expect(headerComponent).toBeVisible();
  expect(screen.getByTestId("albums-link")).toBeVisible();

  expect(headerComponent).toBeVisible();
  expect(screen.getByTestId("photo-link")).toBeVisible();
});
