import React, { useContext } from "react";
import Navigation from "../navigation/Navigation";
import { HeaderStyles } from "../../styles/Header.styles";
import logo from "../../assets/logo.png";
import HeaderContent from "./HeaderContent";
import { SubredditContext } from "../../context/SubredditContext";

const Header = () => {
  const { subreddit } = useContext(SubredditContext);

  return (
    <HeaderStyles>
      <Navigation />
      {subreddit ? (
        <HeaderContent>
          <h1>r/{subreddit}</h1>
          <p>Subreddit specifications</p>
        </HeaderContent>
      ) : (
        <HeaderContent>
          <img src={logo} alt="reddit logo" />
          <h1>Reddit</h1>
        </HeaderContent>
      )}
    </HeaderStyles>
  );
};

export default Header;
