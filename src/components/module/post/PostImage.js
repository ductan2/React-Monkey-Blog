import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const PostimageStyle = styled.div`
    img {
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }
`;
export const PostImage = ({ src, alt, className = '', to }) => {
    if (to) {
        return (
            <NavLink to={to}>
                <PostimageStyle className={`post-image ${className}`}>
                    <img src={src} alt={alt} />
                </PostimageStyle>
            </NavLink>
        );
    }
    return (
        <PostimageStyle className={`post-image ${className}`}>
            <img src={src} alt={alt} />
        </PostimageStyle>
    );
};
