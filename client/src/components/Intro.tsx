/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/slices/favoritesSlice";
import FavoriteCard from "./FavoriteCard";
import ControlBtn from "./ControlBtn";
import "../styles/Intro.scss";

function Intro() {
  // Mock Data
  const favorites: any = useSelector(selectFavorites);

  const favoritesRef: any = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);

  // windowWidth can be sm, md or xl
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  // change slider position on page and resize change
  useEffect(() => {
    if (!favoritesRef) return;
    const cardsLeftPosition = calculateCardsLeftPosition();
    favoritesRef.current.style.transform = `translateX(-${cardsLeftPosition}%)`;
  }, [slideIndex, windowWidth]);

  // handle resize changes and layout shift on different screen sizes
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slideIndex, windowWidth]);

  function handleClickOnPrev() {
    if (slideIndex === 0) return;
    setSlideIndex((prevState) => prevState - 2);
  }

  function handleClickOnNext() {
    if (slideIndex + 2 > 5) return;
    setSlideIndex((prevState) => prevState + 2);
  }

  function handleTouchStart(e: any) {
    setTouchStartPosition(e.touches[0].clientX);
  }

  function handleTouchEnd(e: any) {
    // swipe only works for small screens
    if (windowWidth !== "sm") return;

    const positionDifference = touchStartPosition - e.changedTouches[0].clientX;
    const minDifferenceForTouch = 40;

    if (positionDifference <= -minDifferenceForTouch && slideIndex !== 0) {
      setSlideIndex((prevState) => prevState - 1);
    } else if (positionDifference >= minDifferenceForTouch && slideIndex < 5) {
      setSlideIndex((prevState) => prevState + 1);
    }
  }

  function getWindowWidth() {
    const windowWidth = window.innerWidth;

    // translate window with to sm, md or xl
    if (windowWidth < 768) return "sm";
    if (windowWidth < 1200) return "md";
    return "xl";
  }

  function calculateCardsLeftPosition() {
    // slides left position on sm
    const smCardsPosition = [0, 93, 186, 279, 372, 465];
    if (windowWidth === "sm") return smCardsPosition[slideIndex];

    // slides left position on md
    const mdCardsPosition = [0, 104, 208];
    if (windowWidth === "md") return mdCardsPosition[slideIndex / 2];

    // slides left position on xl
    const xlCardsPosition = [0, 102.5, 205];
    return xlCardsPosition[slideIndex / 2];
  }

  function handleResize() {
    const newWindowWidth = getWindowWidth();

    if (windowWidth !== newWindowWidth) {
      let newSlideIndex;

      const sliderLayoutIsStillSame =
        (windowWidth === "xl" && newWindowWidth === "md") ||
        (windowWidth === "md" && newWindowWidth === "xl");

      if (newWindowWidth === "sm" || sliderLayoutIsStillSame) {
        newSlideIndex = slideIndex;
      } else {
        newSlideIndex = slideIndex % 2 === 0 ? slideIndex : slideIndex - 1;
      }

      setWindowWidth(newWindowWidth);
      setSlideIndex(newSlideIndex);
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
                <a href="/#" className="intro__favorite-card" key={data._id}>
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
            !(slideIndex + 2 >= 6) ? " intro__next-btn--active" : ""
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
