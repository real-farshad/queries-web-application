import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPageLoading, finishPageLoading } from "./redux/slices/loadingSlice";
import { loadFavorites } from "./redux/slices/favoritesSlice";
import { changeNumberOfPages, loadPosts } from "./redux/slices/postsSlice";
import LoadingScreen from "./components/LoadingScreen";
import ContentContainer from "./components/ContentContainer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Community from "./components/Community";
import Challenges from "./components/Challenges";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import "./styles/App.scss";

function App() {
    const pageLoading = useSelector(selectPageLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const favoritesRes = await fetch("/api/favorites");
            const favorites = await favoritesRes.json();
            dispatch(loadFavorites(favorites));

            // check for number of posts in database
            const postsCountRes = await fetch("/api/posts/count");
            const postsCount = await postsCountRes.json();
            const numberOfPages = Math.ceil(postsCount / 4);
            dispatch(changeNumberOfPages(numberOfPages));

            // fetch latest 4 posts
            const postsRes = await fetch("/api/posts");
            const posts = await postsRes.json();
            dispatch(loadPosts(posts));

            setTimeout(() => dispatch(finishPageLoading()), 1000);
        })();
    }, []);

    return (
        <Fragment>
            {pageLoading && <LoadingScreen />}

            <Header />

            <ContentContainer>
                <main>
                    <Posts />

                    <Community />

                    <Challenges />

                    <Tools />
                </main>

                <Footer />
            </ContentContainer>
        </Fragment>
    );
}

export default App;
