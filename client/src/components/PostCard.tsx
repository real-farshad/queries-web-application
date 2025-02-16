import CoverImage from "./CoverImage";
import "../styles/PostCard.scss";

interface PostCardTypes {
  data: {
    image_url: string;
    title: string;
    description: string;
  };
}

function PostCard({ data }: PostCardTypes) {
  const { image_url, title, description } = data;

  return (
    <a href="#!" className="post-card">
      <div className="post-card__container">
        <div className="post-card__shadow">
          <CoverImage src={image_url} />
        </div>

        <div className="post-card__image">
          <CoverImage src={image_url} />
        </div>
      </div>

      <div className="post-card__info">
        <h1 className="post-card__title">{title}</h1>

        <p className="post-card__description">{description}</p>
      </div>
    </a>
  );
}

export default PostCard;
