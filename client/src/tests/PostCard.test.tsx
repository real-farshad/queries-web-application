import { render, screen } from "@testing-library/react";
import PostCard from "../components/PostCard";

const mockData = {
    image_url: "https://my-imgae-url.jpg",
    title: "my title",
    description: "my description",
};

const renderPostCard = () => {
    render(<PostCard data={mockData} />);
};

it("should redner without any errors", renderPostCard);

describe("PostCard", () => {
    beforeEach(renderPostCard);

    it("should have image url in background-image url", () => {
        const imageContainer = screen.getAllByTestId("cover-image")[0];
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
});
