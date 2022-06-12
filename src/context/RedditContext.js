import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const RedditContext = createContext({
    redditPosts: [],
    setRedditPosts: () => {},
    error: false,
    toggleError: () => {},
    loading: false,
    toggleLoading: () => {},
});

export const RedditProvider = ({children}) => {
    const [redditPosts, setRedditPosts] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const result = await axios.get("https://www.reddit.com/hot.json?limit=15");
                setRedditPosts(result.data.data.children);
            } catch (e) {
                console.error(e);
                toggleLoading(true);
            }
            toggleLoading(false);
        }

        fetchData();

        return () => {console.log("unmount")}
    }, []);

    const value = {redditPosts, error, loading}

    return <RedditContext.Provider value={value}>{children}</RedditContext.Provider>

}