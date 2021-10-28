import "../styles/LoadingAnimation.scss";

function LoadingAnimation() {
    return (
        <div className="loading-animation">
            <div className="loading-animation__line loading-animation__line--first" />
            <div className="loading-animation__line loading-animation__line--second" />
            <div className="loading-animation__line loading-animation__line--third" />
            <div className="loading-animation__line loading-animation__line--fourth" />
        </div>
    );
}

export default LoadingAnimation;
