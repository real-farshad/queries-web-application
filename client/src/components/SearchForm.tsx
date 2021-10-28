import { useState } from "react";
import searchIcon from "../assets/search.svg";
import "../styles/SearchForm.scss";

function SearchForm() {
    const [searchInput, setSearchInput] = useState("");

    function handleSearchInput(e: any) {
        setSearchInput(e.value);
    }

    return (
        <form className="search-form">
            <div className="search-form__icon">
                <img src={searchIcon} alt="search" />
            </div>

            <div>
                <label htmlFor="posts-search" hidden>
                    Search
                </label>

                <input
                    className="search-form__text-input"
                    id="posts-search"
                    type="text"
                    placeholder="Search"
                    autoComplete="off"
                    value={searchInput}
                    onClick={handleSearchInput}
                />
            </div>
        </form>
    );
}

export default SearchForm;
