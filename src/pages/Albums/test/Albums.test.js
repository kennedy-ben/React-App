import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Albums } from "../Albums";

describe("Render Albums", () => {
  test("render the albums components", () => {
    render(
      <BrowserRouter>
        <Albums />
      </BrowserRouter>
    );
    const albumComponent = screen.getByTestId("album-component");
    expect(albumComponent).toBeVisible();
    expect(screen.getByTestId("all-albums")).toBeVisible();
  });

  test("displays loader when loading photos", async () => {
    render(
      <BrowserRouter>
        <Albums />
      </BrowserRouter>
    );
    const loader = screen.getByTestId("pic-component").querySelector(".loader");
    expect(loader).toBeInTheDocument();
  });

  test("albums are clickable", async () => {
    render(
      <BrowserRouter>
        <Albums />
      </BrowserRouter>
    );
    await waitFor(() => {
      const albumLinks = screen.queryAllByTestId("album-link");
      albumLinks.forEach((link) => {
        expect(link).toHaveAttribute("href");
      });
    });
  });

  test("each album has text", async () => {
    render(
      <BrowserRouter>
        <Albums />
      </BrowserRouter>
    );
    await waitFor(() => {
      const albumLinks = screen.queryAllByTestId("album-link");
      albumLinks.forEach((link) => {
        expect(link.textContent).toBeTruthy();
      });
    });
  });

  test("each album is clickable and triggers expected behavior", async () => {
    render(
      <BrowserRouter>
        <Albums />
      </BrowserRouter>
    );
    await waitFor(() => {
      const albumLinks = screen.queryAllByTestId("album-link");
      albumLinks.forEach((link) => {
        fireEvent.click(link);
        expect(link).toHaveClass("active");
      });
    });
  });

  test("each photo has text or explanation", async () => {
    render(
      <BrowserRouter>
        <Albums />
      </BrowserRouter>
    );
    await waitFor(() => {
      const photoTitles = screen.queryAllByText(/^Photo Title/);
      photoTitles.forEach((title) => {
        expect(title).toBeTruthy();
      });
    });
  });
});
