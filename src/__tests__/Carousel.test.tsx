import { expect, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "../Carousel";

test("displays the first image by default", () => {
  const images = ["1.jpg", "2.jpg", "3.jpg"];
  const { getByAltText } = render(<Carousel images={images} />);
  const displayedImage = getByAltText("animal") as HTMLImageElement;
  expect(displayedImage.src).toContain("1.jpg");
});

test("changes image when thumbnail is clicked", () => {
  const images = ["1.jpg", "2.jpg", "3.jpg"];
  const { getByAltText, getAllByAltText } = render(
    <Carousel images={images} />,
  );
  const thumbnails = getAllByAltText("animal thumbnail");

  fireEvent.click(thumbnails[1]);
  const displayedImage = getByAltText("animal") as HTMLImageElement;
  expect(displayedImage.src).toContain("2.jpg");

  fireEvent.click(thumbnails[2]);
  expect(displayedImage.src).toContain("3.jpg");
});
