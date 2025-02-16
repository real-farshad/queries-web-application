import CoverImage from "./CoverImage";
import SectionTitle from "./SectionTitle";
import StandardLink from "./StandardLink";
import toolsFirstImage from "../assets/tools-first.jpg";
import toolsSecondImage from "../assets/tools-second.jpg";
import toolsThirdImage from "../assets/tools-third.jpg";
import "../styles/Tools.scss";

function Tools() {
  return (
    <div className="tools">
      <div className="tools__images-container">
        <div className="tools__image tools__image--first">
          <CoverImage src={toolsFirstImage} />
        </div>

        <div className="tools__image tools__image--second">
          <CoverImage src={toolsSecondImage} />
        </div>

        <div className="tools__image tools__image--third">
          <CoverImage src={toolsThirdImage} />
        </div>
      </div>

      <div className="tools__info">
        <div className="tools__title-description-container">
          <div className="tools__title">
            <SectionTitle text="Pick The Right" keyword="Tools" />
          </div>

          <p className="tools__description">
            Suspendisse semper venenatis augue, non pellentesque blandit nec.
          </p>
        </div>

        <div className="tools__link">
          <StandardLink href="#!" text="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default Tools;
