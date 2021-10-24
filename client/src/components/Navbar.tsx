import useMenuAnimation from "../hooks/useMenuAnimation";
import MenuIcon from "./MenuIcon";
import UserButton from "./UserButton";
import CloseIcon from "./CloseIcon";
import avatarImage from "../assets/avatar.jpg";
import "../styles/Navbar.scss";

function Navbar() {
    const user = {
        name: "Sasha",
        avatar: avatarImage,
    };

    const [menu, openMenu, closeMenu]: any = useMenuAnimation();

    return (
        <nav className="navbar">
            <div className="navbar__menu-icon" onClick={openMenu}>
                <MenuIcon />
            </div>

            <div className={`navbar__menu${menu.isOpen ? " navbar__menu--show" : ""}`}>
                <div
                    className={`navbar__dark-menu-bg${
                        menu.animateDarkBg ? " navbar__dark-menu-bg--animate" : ""
                    }`}
                />
                <div
                    className={`navbar__light-menu-bg${
                        menu.animateLightBg ? " navbar__light-menu-bg--animate" : ""
                    }`}
                />
                <div
                    className={`navbar__close-menu${
                        menu.animateCloseBtn ? " navbar__close-menu--animate" : ""
                    }`}
                    onClick={closeMenu}
                >
                    <CloseIcon />
                    <span>Close Menu</span>
                </div>
            </div>

            <ul
                className={`navbar__navigation${
                    menu.isOpen ? " navbar__navigation--show" : ""
                }`}
            >
                <li
                    className={`navbar__nav-link navbar__nav-link--active${
                        menu.animateNavLinks.home ? " navbar__nav-link--animate" : ""
                    }`}
                >
                    <a href="/#">Home</a>
                </li>
                <li
                    className={`navbar__nav-link${
                        menu.animateNavLinks.about ? " navbar__nav-link--animate" : ""
                    }`}
                >
                    <a href="/#">About</a>
                </li>
                <li
                    className={`navbar__nav-link${
                        menu.animateNavLinks.community ? " navbar__nav-link--animate" : ""
                    }`}
                >
                    <a href="/#">Community</a>
                </li>
                <li
                    className={`navbar__nav-link${
                        menu.animateNavLinks.events ? " navbar__nav-link--animate" : ""
                    }`}
                >
                    <a href="/#">Events</a>
                </li>
            </ul>

            <UserButton user={user} />
        </nav>
    );
}

export default Navbar;
