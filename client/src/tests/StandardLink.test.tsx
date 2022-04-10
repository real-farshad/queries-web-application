import { render, screen } from "@testing-library/react";
import StandardLink from "../components/StandardLink";

const mockHref = "https://my-link.com";
const mockText = "my text";
const mockTextOnly = true;

it("should redner without any errors", () => {
    render(<StandardLink href={mockHref} text={mockText} />);
});

describe("StandardLink", () => {
    it("should have passed href in as the value for href attribute in a tag", () => {
        render(<StandardLink href={mockHref} text={mockText} />);
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", mockHref);
    });

    it("should have passed text in it", () => {
        render(<StandardLink href={mockHref} text={mockText} />);
        const link = screen.getByRole("link");
        expect(link).toHaveTextContent(mockText);
    });

    it("should NOT have standard-link--text-only className if textOnly is false", () => {
        render(<StandardLink href={mockHref} text={mockText} />);
        const link = screen.getByRole("link");
        expect(link).not.toHaveClass("standard-link--text-only");
    });

    it("should have standard-link--text-only className if textOnly is true", () => {
        render(
            <StandardLink
                href={mockHref}
                text={mockText}
                textOnly={mockTextOnly}
            />
        );
        const link = screen.getByRole("link");
        expect(link).toHaveClass("standard-link--text-only");
    });
});
