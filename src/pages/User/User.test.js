import { screen } from "@testing-library/react";
import { User } from "../User";
import { render } from "../utils";

test("renders user information details", () => {
  render(<User />);
  const headerComponent = screen.getByTestId("user-component");
  expect(headerComponent).toBeVisible();
  expect(screen.getByTestId("user-name")).toBeVisible();

  expect(headerComponent).toBeVisible();
  expect(screen.getByTestId("user-email")).toBeVisible();

  expect(headerComponent).toBeVisible();
  expect(screen.getByTestId("user-phone")).toBeVisible();

  expect(headerComponent).toBeVisible();
  expect(screen.getByTestId("user-website")).toBeVisible();
});
