import { useDispatch, useSelector } from "react-redux";
import SearchForm from "./SearchForm";
import LoadingAnimation from "./LoadingAnimation";
import ControlBtn from "./ControlBtn";
import PostCard from "./PostCard";
import "../styles/Posts.scss";

import {
    selectPostsLoading,
    startPostsLoading,
    finishPostsLoading,
} from "../redux/slices/loadingSlice";

import {
    selectSearch,
    selectPage,
    selectPosts,
    selectSort,
    changePage,
    selectNumberOfPages,
    changeSort,
    loadPosts,
    addNewPosts,
} from "../redux/slices/postsSlice";

function Posts() {
    const loading = useSelector(selectPostsLoading);
    const search = useSelector(selectSearch);
    const sort = useSelector(selectSort);
    const page = useSelector(selectPage);
    const numberOfPages = useSelector(selectNumberOfPages);
    const posts: any = useSelector(selectPosts);

    const dispatch = useDispatch();

    async function handleClickOnNew() {
        if (sort === "new" || loading) return;

        dispatch(startPostsLoading());

        // fetch latest post in descending order
        const res = await fetch(`/api/posts?search=${search}&sort=new&page=1`);
        const newPosts = await res.json();
        dispatch(loadPosts(newPosts));

        dispatch(changeSort("new"));
        dispatch(changePage(1));

        dispatch(finishPostsLoading());
    }

    async function handleClickOnPopular() {
        if (sort === "popular" || loading) return;

        dispatch(startPostsLoading());

        // fetch popular posts in descending order
        const res = await fetch(`/api/posts?search=${search}&sort=popular&page=1`);
        const newPosts = await res.json();
        dispatch(loadPosts(newPosts));

        dispatch(changeSort("popular"));
        dispatch(changePage(1));

        dispatch(finishPostsLoading());
    }

    function handleClickOnPrev() {
        if (page === 1 || loading) return;

        dispatch(changePage(page - 1));
    }

    async function handleClickOnNext() {
        if (page === numberOfPages || loading) return;

        // if posts are already fetched, use them, otherwise fetch posts
        const nextPageFirstPost = posts[page * 4];
        if (nextPageFirstPost) return dispatch(changePage(page + 1));

        dispatch(startPostsLoading());

        const res = await fetch(
            `/api/posts?search=${search}&sort=${sort}&page=${page + 1}`
        );
        const newPosts = await res.json();
        dispatch(addNewPosts(newPosts));

        dispatch(changePage(page + 1));

        dispatch(finishPostsLoading());
    }

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
                                sort === "new" ? " posts__sort-new-btn--active" : ""
                            }`}
                            onClick={handleClickOnNew}
                        >
                            New
                        </button>

                        <span className="posts__sort-buttons-separator">|</span>

                        <button
                            className={`posts__sort-popular-btn${
                                sort === "popular"
                                    ? " posts__sort-popular-btn--active"
                                    : ""
                            }`}
                            onClick={handleClickOnPopular}
                        >
                            Popular
                        </button>
                    </div>
                </div>

                <div className="posts__page-controls">
                    <div className="posts__loading-animation">
                        {loading && <LoadingAnimation />}
                    </div>

                    <div
                        className={`posts__prev-btn${
                            page !== 1 ? " posts__prev-btn--active" : ""
                        }`}
                        onClick={handleClickOnPrev}
                    >
                        <ControlBtn />
                    </div>

                    <div
                        className={`posts__next-btn${
                            page !== numberOfPages ? " posts__next-btn--active" : ""
                        }`}
                        onClick={handleClickOnNext}
                    >
                        <ControlBtn type="next" />
                    </div>
                </div>
            </div>

            {posts.length === 0 && (
                <div className="posts__empty">
                    <h1>No Post Was Found!</h1>
                    <p>Please search for something else or nothing to get all posts.</p>
                </div>
            )}

            <div className="posts__cards-container">
                {posts.slice((page - 1) * 4, page * 4).map((data: any) => {
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
