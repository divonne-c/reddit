import React from 'react';
import numberNotation from "../../helpers/numberNotation";
import titleLenght from "../../helpers/titleLenght";
import {ArticleLink, SubredditLink, ArticleStyles, ArticleInfo} from "../../styles/ArticleStyles";

const Article = ({post}) => {
    const {url, title, subreddit, subreddit_name_prefixed, num_comments, ups} = post;

    return (
        <ArticleStyles>
            <ArticleLink href={url}><h2>{titleLenght(title)}</h2></ArticleLink>
            <div>
                <SubredditLink to={`/subreddit/${subreddit}`}>{subreddit_name_prefixed}</SubredditLink>
                <div>
                    <ArticleInfo>Comments {num_comments} - Ups {numberNotation(ups)}</ArticleInfo>
                </div>
            </div>
        </ArticleStyles>
    );
};

export default Article;