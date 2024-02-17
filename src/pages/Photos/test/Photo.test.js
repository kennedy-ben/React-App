import { render, screen, waitFor } from "../../utils";
import { Photo } from "../Photo";

describe("Photo test", () => {
  test("renders photo component", async () => {
    render(<Photo />);
    const photoComponent = screen.getByTestId("photo-component");
    expect(photoComponent).toBeVisible();
  });

  test("displays loader when loading photos", async () => {
    render(<Photo />);
    const loader = screen.getByTestId("loadingg-indicator");
    expect(loader).toBeInTheDocument();
  });

  test("each photo has text", async () => {
    render(<Photo />);
    await waitFor(() => {
      const photoData = screen.getAllByTestId("photoData");
      expect(photoData.length).toBeGreaterThan(0);
      photoData.forEach((data) => {
        expect(data.textContent).toBeTruthy();
      });
    });
  });

  test("each photo has picture", async () => {
    render(<Photo />);
    await waitFor(() => {
      const photoPictures = screen.getAllByRole("img");
      expect(photoPictures.length).toBeGreaterThan(0);
      photoPictures.forEach((pic) => {
        expect(pic).toBeInTheDocument();
      });
    });
  });
});
