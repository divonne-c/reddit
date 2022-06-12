import styled from "styled-components";

export const NavigationStyles = styled.nav`
  display: flex;
  gap: 2em;
  width: var(--global-width);
  margin: var(--global-margin);
  justify-content: flex-end;
  padding: 1em 0;
  
  Link, a {
    color: var(--white-color);
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.7em;
  }
`