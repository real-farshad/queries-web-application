import "../styles/StandardLink.scss";

interface StandardLinkTypes {
    href: string;
    text: string;
    textOnly?: boolean;
}

function StandardLink(props: StandardLinkTypes) {
    const { href, text, textOnly } = props;

    return (
        <a
            href={href}
            className={`standard-link${textOnly ? " standard-link--text-only" : ""}`}
        >
            {text} <span className="standard-link__line" />
        </a>
    );
}

export default StandardLink;
