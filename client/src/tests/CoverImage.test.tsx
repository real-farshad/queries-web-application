import { render, screen } from "@testing-library/react";
import CoverImage from "../components/CoverImage";

const mockImageUrl = "https://my-mock-img-url.jpg";

const renderCoverImage = () => {
    render(<CoverImage src={mockImageUrl} />);
};

it("should redner without any errors", renderCoverImage);

describe("CoverImage", () => {
    beforeEach(renderCoverImage);

    it("should have image src that was passed in background-image url", () => {
        const imageContainer = screen.getByTestId("cover-image");
        expect(imageContainer).toHaveStyle(
            `background-image: url(${mockImageUrl})`
        );
    });
});
