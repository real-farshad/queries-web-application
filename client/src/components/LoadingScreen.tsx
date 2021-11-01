import "../styles/LoadingScreen.scss";
import LoadingAnimation from "./LoadingAnimation";

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div className="loading-screen__container">
                <p className="loading-screen__text">Loading</p>
                <LoadingAnimation />
            </div>
        </div>
    );
}

export default LoadingScreen;
