import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const HeaderContent = styled.header`
   background-color: lightslategrey;
   width:100%;
   height: 100%;
   padding: 1rem;
   display: flex;
   align-content: center;
   justify-content: center;
`;

const Title = styled.h1`
    color: #ffffff;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 900;
`;

export const Header = ({ title }) => {
    return (
        <HeaderContent>
            <Title>{title}</Title>
        </HeaderContent>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
