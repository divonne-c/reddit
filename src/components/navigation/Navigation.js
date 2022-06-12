import React from 'react';
import {Link} from "react-router-dom";
import {NavigationStyles} from "../../styles/Navigation.styles";

const Navigation = () => {
    return (
        <NavigationStyles>
            <Link to="/">hottest posts</Link>
            <a href="https://www.reddit.com/">reddit</a>
            <a href="https://www.reddit.com/r/memes/">memes</a>
        </NavigationStyles>
    );
};

export default Navigation;