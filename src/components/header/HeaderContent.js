import React from 'react';
import {HeaderContentStyles} from "../../styles/Header.styles";

const HeaderContent = ({children}) => {
    return (
        <HeaderContentStyles>
            {children}
        </HeaderContentStyles>
    );
};

export default HeaderContent;