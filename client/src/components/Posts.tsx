import { useSelector } from "react-redux";
import { selectPage, selectPosts, selectSort } from "../redux/slices/postsSlice";
import ControlBtn from "./ControlBtn";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./SearchForm";
import PostCard from "./PostCard";
import "../styles/Posts.scss";

function Posts() {
    const sort = useSelector(selectSort);
    const page = useSelector(selectPage);
    const posts: any = useSelector(selectPosts);

    return (
        <div className="posts">
            <div className="posts__controls">
                <div className="posts__primary-controls-container">
                    <div className="posts__search-form">
                        <SearchForm />
                    </div>

                    <div className="posts__sort-controls">
                        <button
                            className={`posts__sort-new-btn${
                                sort === "publish_date"
                                    ? " posts__sort-new-btn--active"
                                    : ""
                            }`}
                        >
                            New
                        </button>

                        <span className="posts__sort-buttons-separator">|</span>

                        <button
                            className={`posts__sort-popular-btn${
                                sort === "views" ? " posts__sort-popular-btn--active" : ""
                            }`}
                        >
                            Popular
                        </button>
                    </div>
                </div>

                <div className="posts__page-controls">
                    <div className="posts__loading-animation">
                        {/* <LoadingAnimation /> */}
                    </div>

                    <div
                        className={`posts__prev-btn${
                            page !== 1 ? " posts__prev-btn--active" : ""
                        }`}
                    >
                        <ControlBtn />
                    </div>

                    <div
                        className={`posts__next-btn${
                            page !== 3 ? " posts__next-btn--active" : ""
                        }`}
                    >
                        <ControlBtn type="next" />
                    </div>
                </div>
            </div>

            <div className="posts__cards-container">
                {posts.map((data: any) => {
                    const { _id, image_url, title, description } = data;

                    return (
                        <a href="/#" className="posts__card" key={_id}>
                            <PostCard
                                data={{
                                    image_url,
                                    title,
                                    description,
                                }}
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Posts;
