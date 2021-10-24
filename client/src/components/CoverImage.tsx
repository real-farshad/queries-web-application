import "../styles/CoverImage.scss";

interface CoverImage {
    imageUrl: string;
}

function CoverImage({ imageUrl }: CoverImage) {
    return (
        <div
            className="cover-image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
    );
}

export default CoverImage;
