import "../styles/StandardLink.scss";

interface StandardLinkTypes {
    href: string;
    text: string;
}

function StandardLink(props: StandardLinkTypes) {
    const { href, text } = props;

    return (
        <a href={href} className="standard-link">
            {text} <span className="standard-link__line" />
        </a>
    );
}

export default StandardLink;
