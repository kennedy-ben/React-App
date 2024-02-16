import { fireEvent, screen, waitFor } from "@testing-library/react";
import { User } from "../User";
import { render } from "../../utils";

describe("Users tests", () => {
  
  test("renders user information details", () => {
    render(<User />);
    const headerComponent = screen.getByTestId("user-component");

    expect(headerComponent).toBeVisible();
    expect(screen.getByTestId("user-name")).toBeVisible();
    expect(screen.getByTestId("user-email")).toBeVisible();
    expect(screen.getByTestId("user-phone")).toBeVisible();
    expect(screen.getByTestId("user-website")).toBeVisible();
    expect(screen.getByTestId("albulms-header")).toHaveTextContent("Albums");
  });

  test("each album listed has href link to open it", () => {
    test.each((album) => {
      const albumsData = screen.toBeVisible("albumsData");
      expect(albumsData).toBeChecked();

      const albumLink = screen.toBeVisible("albumsData");
      expect(albumLink).toHaveAttribute("href", `/albums/${album.id}`);
    });
  });

  test("shows loader when new data is being loaded", async () => {
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"), 
      useParams: () => ({
        userId: "1",
      }),
    }));

    render(<User />);

    expect(screen.queryByTestId("loading-indicator")).toBeVisible();

    waitFor(() => {
      expect(screen.queryByTestId("loading-indicator")).toBeNull();
    });

    waitFor(
      () => {
        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(10);
      },
      { timeout: 3000 }
    );
  });

  test("clicking album link opens respective album", async () => {
    test.each(async (album) => {
      const albumLink = screen.toBeVisible("albumsData");
      expect(albumLink).toHaveAttribute("href", `/albums/${album.id}`);
      await fireEvent(albumLink);

      waitFor(() => {
        expect(screen.getByTestId("all-albums")).toBeVisible();
      });
    });
  });
});
