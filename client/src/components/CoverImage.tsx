import "../styles/CoverImage.scss";

interface CoverImage {
    src: string;
}

function CoverImage({ src }: CoverImage) {
    return (
        <div
            className="cover-image"
            style={{
                backgroundImage: `url(${src})`,
            }}
        />
    );
}

export default CoverImage;
