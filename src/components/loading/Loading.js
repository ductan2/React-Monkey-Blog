import React from 'react';
import styled from 'styled-components';
const LoadingStyles = styled.div`
    width: 50px;
    height: 50px;
    border:5px solid white;
    border-radius: 100%;
    border-right-color: transparent;
    animation: spinner 1s infinite linear;
    @keyframes spinner {
        100% {
            transform: rotate(360deg);
        }
    }
`;
export const Loading = () => {
    return <LoadingStyles></LoadingStyles>;
};
