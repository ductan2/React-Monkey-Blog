import { signOut } from 'firebase/auth';
import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/layout/Header';
import { auth } from '../firebase/firebase-config';
const HomePagesStyles=styled.div`

`
export const HomePages = () => {
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <HomePagesStyles>
            <Header></Header>
        </HomePagesStyles>
    );
};
