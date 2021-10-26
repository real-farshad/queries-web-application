import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/slices/favoritesSlice";
import FavoriteCard from "./FavoriteCard";
import "../styles/Intro.scss";
import ControlBtn from "./ControlBtn";

function Intro() {
    // Mock Data
    const favorites: any = useSelector(selectFavorites);

    const favoritesRef: any = useRef(null);

    const [slideIndex, setSlideIndex] = useState(0);

    const initialSlideCount = window.innerWidth > 768 ? 6 : 3;
    const [slideCount, setSlideCount] = useState(initialSlideCount);

    const [touchStartPosition, setTouchStartPosition] = useState(0);

    useEffect(() => {
        if (!favoritesRef) return;

        favoritesRef.current.style.transform = `translateX(-${(slideIndex / 2) * 100}%)`;
    }, [slideIndex, slideCount]);

    function handleClickOnPrev() {
        if (slideIndex === 0) return;
        setSlideIndex((prevState) => prevState - 2);
    }

    function handleClickOnNext() {
        if (slideIndex * 2 > slideCount) return;
        setSlideIndex((prevState) => prevState + 2);
    }

    function handleTouchStart(e: any) {
        setTouchStartPosition(e.touches[0].clientX);
    }

    function handleTouchEnd(e: any) {
        const positionDifference = touchStartPosition - e.changedTouches[0].clientX;
        if (positionDifference <= -40 && slideIndex !== 0) {
            setSlideIndex((prevState) => prevState - 1);
        } else if (positionDifference >= 40 && slideIndex <= slideCount) {
            setSlideIndex((prevState) => prevState + 1);
        }
    }

    return (
        <div className="intro">
            <div
                className="intro__favorites-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="intro__favorites" ref={favoritesRef}>
                    {favorites.length > 0 &&
                        favorites.map((data: any, index: number) => {
                            return (
                                <a
                                    href="/#"
                                    className="intro__favorite-card"
                                    key={data._id}
                                >
                                    <FavoriteCard data={data} count={index + 1} />
                                </a>
                            );
                        })}
                </div>
            </div>
            <div className="intro__controlls">
                <div
                    className={`intro__prev-btn ${
                        slideIndex > 0 ? " intro__prev-btn--active" : ""
                    }`}
                    onClick={handleClickOnPrev}
                >
                    <ControlBtn size="large" />
                </div>
                <div
                    className={`intro__next-btn ${
                        !(slideIndex * 2 > slideCount) ? " intro__next-btn--active" : ""
                    }`}
                    onClick={handleClickOnNext}
                >
                    <ControlBtn type="next" size="large" />
                </div>
            </div>
        </div>
    );
}

export default Intro;
