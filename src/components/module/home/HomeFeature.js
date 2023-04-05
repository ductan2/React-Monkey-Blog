import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Heading from '../../layout/Heading';
import PostFeatureItem from '../post/PostFeatureItem';
import {
    where,
    query,
    collection,
    onSnapshot,
    limit
} from 'firebase/firestore';
import { db } from '../../../firebase/firebase-config';
const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const colRef = collection(db, 'posts');
        const q = query(
            colRef,
            where('status', '==', 1),
            where('hot', '==', true),
            limit(3)
        );
        onSnapshot(q, (snapshot) => {
            const result = [];
            snapshot.forEach((doc) => {
                result.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setPosts(result);
        });
    }, []);
    if (!posts || posts.length < 0) return;

    return (
        <HomeFeatureStyles className="home-block">
            <div className="container">
                <Heading>Bài viết nổi bật</Heading>
                <div className="grid-layout">
                    {posts.map((item) => {
                        return <PostFeatureItem key={item.id} data={item}></PostFeatureItem>;
                    })}
                </div>
            </div>
        </HomeFeatureStyles>
    );
};

export default HomeFeature;
