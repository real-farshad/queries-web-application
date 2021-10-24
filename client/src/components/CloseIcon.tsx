import "../styles/CloseIcon.scss";

function CloseIcon() {
    return (
        <div className="close-icon">
            <div className="close-icon__line close-icon__line--top" />
            <div className="close-icon__line close-icon__line--bottom" />
        </div>
    );
}

export default CloseIcon;
