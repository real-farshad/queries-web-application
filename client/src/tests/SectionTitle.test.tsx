import { render, screen } from "@testing-library/react";
import SectionTitle from "../components/SectionTitle";

const mockText = "my mock title";
const mockKeyword = "my mock keyword";

const renderSectionTitle = () => {
    render(<SectionTitle text={mockText} keyword={mockKeyword} />);
};

it("should redner without any errors", renderSectionTitle);

describe("SectionTitle", () => {
    beforeEach(renderSectionTitle);

    it("should have passed text in it", () => {
        const titleContainer = screen.getByRole("heading");
        expect(titleContainer).toHaveTextContent(mockText);
    });

    it("should have passed keyword in it", () => {
        const titleContainer = screen.getByRole("heading");
        expect(titleContainer).toHaveTextContent(mockKeyword);
    });
});
