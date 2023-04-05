import { doc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../../../firebase/firebase-config';
import PostCategory from './PostCategory';
import { PostImage } from './PostImage';
import { PostMeta } from './PostMeta';
import { PostTitle } from './PostTitle';
const PostFeatureItemStyles = styled.div`
    width: 100%;
    border-radius: 16px;
    position: relative;
    height: 169px;
    .post {
        &-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 16px;
        }
        &-overlay {
            position: absolute;
            inset: 0;
            border-radius: 16px;
            background: linear-gradient(
                179.77deg,
                #6b6b6b 36.45%,
                rgba(163, 163, 163, 0.622265) 63.98%,
                rgba(255, 255, 255, 0) 99.8%
            );
            mix-blend-mode: multiply;
            opacity: 0.6;
        }
        &-content {
            position: absolute;
            inset: 0;
            z-index: 10;
            padding: 20px;
            color: white;
        }
        &-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
        }

        &-info {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 14px;
            font-weight: 600;
            color: white;
            margin-left: auto;
        }
        &-dot {
            display: inline-block;
            width: 4px;
            height: 4px;
            background-color: currentColor;
            border-radius: 100rem;
        }
        &-title {
            font-weight: bold;
            line-height: 1.5;
            display: block;
            font-size: 22px;
            color: white;
        }
    }
    @media screen and (min-width: 1024px) {
        height: 272px;
    }
`;
const PostFeatureItem = ({data}) => {
    
    if(!data || !data.id) return ;
  
    return (
        <PostFeatureItemStyles>
            {/* <img
                src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
                alt="unsplash"
                className="post-image"
            /> */}
            <PostImage
                src={data.image}
                alt={"unsplash"}
            ></PostImage>
            <div className="post-overlay"></div>
            <div className="post-content">
                <div className="post-top">
                    =
                    <PostMeta auth={data.auth}></PostMeta>
                </div>
                <PostTitle size="big">
                    {data.title}
                </PostTitle>
            </div>
        </PostFeatureItemStyles>
    );
};

export default PostFeatureItem;
