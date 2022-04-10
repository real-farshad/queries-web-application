import { render, screen } from "@testing-library/react";
import ControlBtn from "../components/ControlBtn";

const mockType = "next";
const mockSize = "large";

it("should redner without any errors", () => {
    render(<ControlBtn />);
});

describe("ControlBtn", () => {
    it("should have prev text in button if no type is passed", () => {
        render(<ControlBtn />);
        const prevBtn = screen.getByText(/prev/i);
        expect(prevBtn).toBeInTheDocument();
    });

    it("should have next text in button if button type is next", () => {
        render(<ControlBtn type={mockType} />);
        const nextBtn = screen.getByText(/next/i);
        expect(nextBtn).toBeInTheDocument();
    });

    it("should NOT have large testid if button size is not passed", () => {
        render(<ControlBtn />);
        const largeStyling = screen.queryByTestId("large");
        expect(largeStyling).not.toBeInTheDocument();
    });

    it("should have large testid if button size is large", () => {
        render(<ControlBtn size={mockSize} />);
        const largeStyling = screen.getByTestId("large");
        expect(largeStyling).toBeInTheDocument();
    });
});
