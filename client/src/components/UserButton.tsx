import "../styles/UserButton.scss";

interface UserButton {
    user: {
        name: string;
        avatar: string;
    };
}

function UserButton({ user }: UserButton) {
    return (
        <div className="user-button">
            <p className="user-button__text">{user.name}</p>
            <img className="user-button__avatar" src={user.avatar} alt="avatar" />
        </div>
    );
}

export default UserButton;
