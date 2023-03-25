import React from 'react';
import styled from 'styled-components';
const PostMetaStyle = styled.div`
    .post {
        &-info {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            font-weight: 600;
            margin-left: auto;
            color: #6b6b6b;
        }
        &-dot {
            display: inline-block;
            width: 4px;
            height: 4px;
            background-color: currentColor;
            border-radius: 100rem;
        }
    }
`;
export const PostMeta = ({ date = 'Mar 23', auth = 'Andiez Le' }) => {
    return (
        <PostMetaStyle className="post-info">
            <span className="post-time">{date}</span>
            <span className="post-dot"></span>
            <span className="post-author">{auth}</span>
        </PostMetaStyle>
    );
};
