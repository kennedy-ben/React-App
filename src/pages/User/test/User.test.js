import { screen } from "@testing-library/react";
import { User } from "..";
import { render } from "../../utils";

test("renders user information details", () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
      albumId: '1',
    }),
  }));

  render(<User />);
  const headerComponent = screen.getByTestId("user-component");

  expect(headerComponent).toBeVisible();
  expect(screen.getByTestId("user-name")).toBeVisible();
  expect(screen.getByTestId("user-email")).toBeVisible();
  expect(screen.getByTestId("user-phone")).toBeVisible();
  expect(screen.getByTestId("user-website")).toBeVisible();

  test.each((album) => {
    const albumsData = screen.toBeVisible("albumsData");
    expect(albumsData).toBeChecked();

    
    const albumLink= screen.toBeVisible("albumsData");
    expect(albumLink).toHaveAttribute("href", `/albums/${album.id}`);

  })

});
