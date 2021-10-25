import CoverImage from "./CoverImage";
import "../styles/FavoriteCard.scss";

interface FavoriteCard {
    data: {
        image_url: string;
        title: string;
        description: string;
    };
    count: number;
}

function FavoriteCard({ data, count }: FavoriteCard) {
    console.log(data);

    return (
        <div className="favorite-card">
            <div className="favorite-card__container">
                <div className="favorite-card__image">
                    <CoverImage src={data.image_url} />
                </div>
                <div className="favorite-card__count">
                    <span>0{count}</span>
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
