import { render, screen } from "@testing-library/react";
import FavoriteCard from "../components/FavoriteCard";

const mockData = {
  image_url: "https://my-imgae-url.jpg",
  title: "my title",
  description: "my description",
};
const mockCount = 1;

const renderFavoriteCard = () => {
  render(<FavoriteCard data={mockData} count={mockCount} />);
};

it("should redner without any errors", renderFavoriteCard);

describe("FavoriteCard", () => {
  beforeEach(renderFavoriteCard);

  it("should have image url in background-image url", () => {
    const imageContainer = screen.getByTestId("cover-image");
    expect(imageContainer).toHaveStyle(
      `background-image: url(${mockData.image_url})`
    );
  });

  it("should have passed title in it", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(mockData.title);
  });

  it("should have passed description in it", () => {
    const description = screen.getByText(mockData.description);
    expect(description).toBeInTheDocument();
  });

  it("should have passed count in it", () => {
    const countContainer = screen.getByTestId("count");
    expect(countContainer).toHaveTextContent(`${mockCount}`);
  });
});
