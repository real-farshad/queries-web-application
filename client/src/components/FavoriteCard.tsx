import "../styles/FavoriteCard.scss";

interface FavoriteCard {
    data: {
        image_url: string;
        title: string;
        description: string;
    };
}

function FavoriteCard({ data }: FavoriteCard) {
    return (
        <div>
            <div></div>
        </div>
    );
}

export default FavoriteCard;
