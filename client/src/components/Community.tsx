import SectionTitle from "./SectionTitle";
import CoverImage from "./CoverImage";
import StandardLink from "./StandardLink";
import firstCommunityImage from "../assets/community-first.jpg";
import secondCommunityImage from "../assets/community-second.jpg";
import "../styles/Community.scss";

function Community() {
  return (
    <div className="community">
      <div className="community__top-container">
        <div className="community__title-for-large">
          <SectionTitle text="Join The Community And Make" keyword="Friends" />
        </div>

        <div className="community__top-image">
          <CoverImage src={firstCommunityImage} />
        </div>
      </div>

      <div className="community__bottom-container">
        <div className="community__bottom-image">
          <CoverImage src={secondCommunityImage} />
        </div>

        <div className="community__info">
          <div className="community__title-for-small">
            <SectionTitle
              text="Join The Community And Make"
              keyword="Friends"
            />
          </div>

          <p className="community__description">
            Pellentesque nisl orci, tempus vel mi in, consequat aliquet nulla.
            Vivamus luctus leo vel erat bibendum, eget facilisis mi hendrerit.
            Quisque pharetra nibh mauris, ut ultricies metus accumsan sit amet.
          </p>

          <StandardLink href="#!" text="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default Community;
