import styled from "styled-components";
import {Link} from "react-router-dom";

export const ArticleContainerStyles = styled.div`
  display: flex;
  gap: 1.5em;
  flex-wrap: wrap;
  width: var(--global-width);
  margin: var(--global-margin);
`

export const ArticleLink = styled.a`
  color: var(--black-color);
`

export const ArticleTitle = styled.div`
  text-align: center;
  margin: 4em 2em;
`

export const ArticleStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--white-color);
  padding: 1em;
  min-height: 200px;
  flex-basis: calc(33% - 1.5em);
  flex-shrink: 0;
`

export const SubredditLink = styled(Link)`
  color: red !important;
  text-decoration: underline !important;
`

export const ArticleInfo = styled.span`
  color: var(--grey-color);
`