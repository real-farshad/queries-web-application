import { render, screen } from "@testing-library/react";
import UserButton from "../components/UserButton";

const mockUser = {
    name: "my name",
    avatar: "https://my-avatar.jpg",
};

const renderUserButton = () => {
    render(<UserButton user={mockUser} />);
};

it("should redner without any errors", renderUserButton);

describe("UserButton", () => {
    beforeEach(renderUserButton);

    it("should have passed name in it", () => {
        const nameContainer = screen.getByText(mockUser.name);
        expect(nameContainer).toBeInTheDocument();
    });

    it("should have passed avatar as value for img src attribute in it", () => {
        const avatarImg = screen.getByRole("img");
        expect(avatarImg).toHaveAttribute("src", mockUser.avatar);
    });
});
