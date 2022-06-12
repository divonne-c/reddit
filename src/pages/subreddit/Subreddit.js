import React, {useContext, useEffect, useState} from 'react';
import {RedditContext} from "../../context/RedditContext";
import axios from "axios";
import {SubredditContext} from "../../context/SubredditContext";
import {useParams} from "react-router-dom";
import {
    BackToHomeContainer,
    BackToHomeIcon,
    BackToHomeLink,
    SubredditContainer,
    SubredditElement
} from "../../styles/Subreddit.styles";
import numberNotation from "../../helpers/numberNotation";

const Subreddit = () => {
    const [subredditInfo, setSubredditInfo] = useState({});
    const [subscribers, setSubscribers] = useState("");
    const {redditPosts, error, loading} = useContext(RedditContext);
    const {setSubreddit} = useContext(SubredditContext);
    const {subredditId} = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                setSubredditInfo(result.data.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [redditPosts]);

    useEffect(() => {
        setSubreddit(subredditId);
        const currentRedditPost = redditPosts.find((post) => {
            return (post.data.subreddit === subredditId);
        });

        currentRedditPost && setSubscribers(currentRedditPost.data.subreddit_subscribers);

        return () => {
            setSubreddit("")
        }

    }, [subredditInfo])


    return (
        <SubredditContainer>
            <SubredditElement>
                {error && <span>Er is iets mis gegaan met het ophalen van de data</span>}
                {loading && <span>Loading ...</span>}
                <h2>Title</h2>
                <p>{subredditInfo.display_name}</p>
            </SubredditElement>
            <SubredditElement>
                <h2>Description</h2>
                <p>{subredditInfo.public_description}</p>
            </SubredditElement>
            <SubredditElement>
                <h2>Number of subscribers</h2>
                <span>{numberNotation(subscribers)}</span>
            </SubredditElement>

            <BackToHomeContainer>
                <BackToHomeIcon>&#x0003C;</BackToHomeIcon>
                <BackToHomeLink to="/">Take me back</BackToHomeLink>
            </BackToHomeContainer>
        </SubredditContainer>
    );
};

export default Subreddit;