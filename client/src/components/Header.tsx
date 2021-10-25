import ContentContainer from "./ContentContainer";
import Navbar from "./Navbar";
import Intro from "./Intro";
import "../styles/Header.scss";

function Header() {
    return (
        <header className="header">
            {/* <div className="header__background-light" /> */}

            <ContentContainer>
                <Navbar />
            </ContentContainer>

            <Intro />
        </header>
    );
}

export default Header;
