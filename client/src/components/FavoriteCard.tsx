import CoverImage from "./CoverImage";
import "../styles/FavoriteCard.scss";

interface FavoriteCardTypes {
    data: {
        image_url: string;
        title: string;
        description: string;
    };
    count: number;
}

function FavoriteCard({ data, count }: FavoriteCardTypes) {
    return (
        <div className="favorite-card">
            <div className="favorite-card__container">
                <div className="favorite-card__image">
                    <CoverImage src={data.image_url} />
                </div>
                <div className="favorite-card__count">
                    <span data-testid="count">0{count}</span>
                </div>
            </div>
            <div className="favorite-card__info">
                <h1 className="favorite-card__title">{data.title}</h1>
                <p className="favorite-card__description">{data.description}</p>
            </div>
        </div>
    );
}

export default FavoriteCard;
