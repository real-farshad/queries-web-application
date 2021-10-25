import "../styles/UserButton.scss";

interface UserButtonTypes {
    user: {
        name: string;
        avatar: string;
    };
}

function UserButton({ user }: UserButtonTypes) {
    return (
        <div className="user-button">
            <p className="user-button__text">{user.name}</p>
            <img className="user-button__avatar" src={user.avatar} alt="avatar" />
        </div>
    );
}

export default UserButton;
