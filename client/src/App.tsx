import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { finishPageLoading } from "./redux/slices/loadingSlice";
import { loadFavorites } from "./redux/slices/favoritesSlice";
import { loadPosts } from "./redux/slices/postsSlice";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const favoritesRes = await fetch("/api/favorites");
            const favorites = await favoritesRes.json();
            dispatch(loadFavorites(favorites));

            const postsRes = await fetch("/api/posts");
            const posts = await postsRes.json();
            dispatch(loadPosts(posts));

            dispatch(finishPageLoading);
        })();
    }, []);

    return (
        <Fragment>
            <Header />
        </Fragment>
    );
}

export default App;
