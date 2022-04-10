import "../styles/ControlBtn.scss";

interface ControlBtnTypes {
    type?: "next";
    size?: "large";
}

function ControlBtn(props: ControlBtnTypes) {
    const { type, size } = props;

    return (
        <button
            className={`control-btn${
                type === "next" ? " control-btn--reverse" : ""
            }${size === "large" ? " control-btn--large" : ""}`}
            data-testid={size === "large" ? "large" : ""}
        >
            <div
                className={`control-btn__arrow${
                    type === "next" ? " control-btn__arrow--reverse" : ""
                }${size === "large" ? " control-btn__arrow--large" : ""}`}
            >
                <div
                    className={`control-btn__arrow-line control-btn__arrow-line--top${
                        size === "large"
                            ? " control-btn__arrow-line--large"
                            : ""
                    }`}
                />
                <div
                    className={`control-btn__arrow-line control-btn__arrow-line--bottom${
                        size === "large"
                            ? " control-btn__arrow-line--large"
                            : ""
                    }`}
                />
            </div>

            <p
                className={`control-btn__text${
                    size === "large" ? " control-btn__text--large" : ""
                }`}
            >
                {type === "next" ? "Next" : "Prev"}
            </p>
        </button>
    );
}

export default ControlBtn;
