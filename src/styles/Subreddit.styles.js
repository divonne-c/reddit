import styled from "styled-components";
import {Link} from "react-router-dom";

export const SubredditContainer = styled.div`
  margin: 3rem 20%;    
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SubredditElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p, span {
    color: var(--grey-color);
  }
`

export const BackToHomeContainer = styled.div`
    margin-top: 4rem;
`

export const BackToHomeIcon = styled.span`
  color: var(--red-color); 
  padding-right: 0.5rem;
`

export const BackToHomeLink = styled(Link)`
  color: var(--red-color);
  text-decoration: underline !important;
`