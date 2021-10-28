import { useSelector } from "react-redux";
import { selectPosts } from "../redux/slices/postsSlice";
import ControlBtn from "./ControlBtn";
import LoadingAnimation from "./LoadingAnimation";
import SearchForm from "./SearchForm";
import "../styles/Posts.scss";
import PostCard from "./PostCard";

function Posts() {
    const posts: any = useSelector(selectPosts);

    return (
        <div className="posts">
            <div className="posts__controls">
                <div className="posts__primary-controls-container">
                    <div className="posts__search-form">
                        <SearchForm />
                    </div>

                    <div className="posts__sort-controls">
                        <button className="posts__sort-new-btn">New</button>

                        <span>|</span>

                        <button className="posts__sort-popular-btn">Popular</button>
                    </div>
                </div>

                <div className="posts__page-controls">
                    <div className="posts__loading-animation">
                        {/* <LoadingAnimation /> */}
                    </div>

                    <div className="posts__prev-btn">
                        <ControlBtn />
                    </div>

                    <div className="posts__next-btn">
                        <ControlBtn type="next" />
                    </div>
                </div>
            </div>

            <div className="posts__cards-container">
                {posts.map((data: any) => {
                    const { _id, image_url, title, description } = data;

                    return (
                        <div className="posts__card" key={_id}>
                            <PostCard
                                data={{
                                    image_url,
                                    title,
                                    description,
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Posts;
