import "../styles/SectionTitle.scss";

interface SectionTitleTypes {
    text: string;
    keyword: string;
}

function SectionTitle(props: SectionTitleTypes) {
    const { text, keyword } = props;

    return (
        <h1 className="section-title">
            {text} <span className="section-title__keyword">{keyword}</span>
        </h1>
    );
}

export default SectionTitle;
