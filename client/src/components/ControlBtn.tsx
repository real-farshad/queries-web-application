import "../styles/ControlBtn.scss";

interface ControlBtnTypes {
    type?: "next";
    size?: "large";
}

function ControlBtn(props: ControlBtnTypes) {
    const { type, size } = props;

    return (
        <div className={`control-btn${type === "next" ? " control-btn--reverse" : ""}`}>
            <div
                className={`control-btn__arrow${
                    type === "next" ? " control-btn__arrow--reverse" : ""
                }`}
            >
                <div className="control-btn__arrow-line control-btn__arrow-line--top" />
                <div className="control-btn__arrow-line control-btn__arrow-line--bottom" />
            </div>

            <p className="control-btn__text">{type === "next" ? "Next" : "Prev"}</p>
        </div>
    );
}

export default ControlBtn;
