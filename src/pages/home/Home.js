import React, {useContext} from 'react';
import {RedditContext} from "../../context/RedditContext";
import Article from "../../components/articles/Article";
import {ArticleContainerStyles, ArticleTitle} from "../../styles/ArticleStyles";

const Home = () => {
    const {redditPosts, error, loading} = useContext(RedditContext);

    return (
        <div>
            <ArticleTitle>
                <h1>Hottest posts</h1>
                <h4>on Reddit right now</h4>
            </ArticleTitle>

            {error && <span>Er is iets mis gegaan met het ophalen van de data</span>}
            {loading && <span>Loading ...</span>}

            <ArticleContainerStyles>
                {redditPosts.map((post) => {
                    return (
                        <Article key={post.data.id} post={post.data}/>
                    )
                })}
            </ArticleContainerStyles>
        </div>
    );
};

export default Home;