import { screen, within } from "@testing-library/react";
import { Header } from "../Header";
import { render } from "../../utils";

describe("Header tests", () => {
  test("renders all required links", () => {
    render(<Header />);

    const headerComponent = screen.getByTestId("header-component");
    expect(headerComponent).toBeVisible();

    expect(screen.getByTestId("users-link")).toBeVisible();
    expect(screen.getByTestId("albums-link")).toBeVisible();
    expect(screen.getByTestId("photo-link")).toBeVisible();
  });

  test("logs user when clicking logout button", async () => {
    render(<Header />);

    const headerComponent = screen.getByTestId("header-component");
    const logoutBtn = within(headerComponent).getByTestId("buttonToLogout");
    expect(logoutBtn).toBeDefined();
  });
});
