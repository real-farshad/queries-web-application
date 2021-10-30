import SectionTitle from "./SectionTitle";
import StandardLink from "./StandardLink";
import challengesFirstImage from "../assets/challenges-first.jpg";
import challengesSecondImage from "../assets/challenges-second.jpg";
import "../styles/Challenges.scss";
import CoverImage from "./CoverImage";

function Challenges() {
    return (
        <div className="challenges">
            <div className="challenges__info">
                <div className="challenges__title">
                    <SectionTitle
                        text="Challenge Yourself And Get There"
                        keyword="Faster"
                    />
                </div>

                <p className="challenges__description">
                    Mauris sed enim id orci ullamcorper lacinia. Sed sodales suscipit
                    eros, nec feugiat tortor lobortis ac. Mauris consequat, lacus congue
                    porttitor hendrerit, quam mi finibus felis, sed posuere enim lectus
                    viverra lorem.
                </p>

                <div className="challenges__link">
                    <StandardLink href="/#" text="Learn More" />
                </div>
            </div>

            <div className="challenges__wrapper">
                <div className="challenges__image-container challenges__image-container--first">
                    <div className="challenges__image-bg challenges__image-bg--first" />

                    <div className="challenges__image challenges__image--first">
                        <CoverImage src={challengesFirstImage} />
                    </div>
                </div>

                <div className="challenges__image-container challenges__image-container--second">
                    <div className="challenges__image-bg challenges__image-bg--second" />

                    <div className="challenges__image challenges__image--second">
                        <CoverImage src={challengesSecondImage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Challenges;
