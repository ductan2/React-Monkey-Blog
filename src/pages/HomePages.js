import { signOut } from 'firebase/auth';
import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/layout/Header';
import { Layout } from '../components/layout/Layout';
import { Banner } from '../components/module/home/Banner';
import HomeFeature from '../components/module/home/HomeFeature';
import HomeNewest from '../components/module/home/HomeNewest';
import { auth } from '../firebase/firebase-config';
const HomePagesStyles = styled.div``;
export const HomePages = () => {
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <HomePagesStyles>
            <Layout>
            
                <Banner></Banner>
                <HomeFeature></HomeFeature>
                <HomeNewest></HomeNewest>
            </Layout>
        </HomePagesStyles>
    );
};
