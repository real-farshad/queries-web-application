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

                <Intro />
            </ContentContainer>
        </header>
    );
}

export default Header;
