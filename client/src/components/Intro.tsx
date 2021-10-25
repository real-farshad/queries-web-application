import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/slices/favoritesSlice";
import FavoriteCard from "./FavoriteCard";
import "../styles/Intro.scss";
import ControlBtn from "./ControlBtn";

function Intro() {
    const favorites: any = useSelector(selectFavorites);

    return (
        <div className="intro">
            <div className="intro__favorites-container">
                <div className="intro__favorites">
                    {favorites.length > 0 &&
                        favorites.map((data: any, index: number) => {
                            return (
                                <div className="intro__favorite-card" key={data.id}>
                                    <FavoriteCard data={data} count={index + 1} />
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="intro__controlls">
                <div className="intro__prev-btn">
                    <ControlBtn size="large" />
                </div>
                <div className="intro__next-btn intro__next-btn--active">
                    <ControlBtn type="next" size="large" />
                </div>
            </div>
        </div>
    );
}

export default Intro;
