import {createContext, useState} from "react";

export const SubredditContext = createContext({
    redditPosts: [],
    setRedditPosts: () => {},
});

export const SubredditProvider = ({children}) => {
    const [subreddit, setSubreddit] = useState("");

    const value = {subreddit, setSubreddit}

    return <SubredditContext.Provider value={value}>{children}</SubredditContext.Provider>

}