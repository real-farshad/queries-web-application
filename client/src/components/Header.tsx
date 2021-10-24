import ContentContainer from "./ContentContainer";
import Navbar from "./Navbar";
import Intro from "./Intro";
import "../styles/Header.scss";

function Header() {
    return (
        <header>
            <ContentContainer>
                <Navbar />
            </ContentContainer>

            <Intro />
        </header>
    );
}

export default Header;
