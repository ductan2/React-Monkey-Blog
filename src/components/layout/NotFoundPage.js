import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../button/Button';
const NotFoundStyles = styled.div`
    display: flex;
    transform: translateY(50%);
    flex-direction: column;
    align-items: center;
    gap: 30px;
    .notfound-img{
      max-width: 150px;
    }
    .notfound-link {
        padding: 20px 40px;
         font-size: 20px;
         font-weight: 600;
        border-radius: 8px;
        background-color: ${(props) => props.theme.primary};
        color:white;
    }
`;
export const NotFoundPage = () => {
    return (
        <NotFoundStyles>
            <div className="notfound-img">
                <img src="./logo2x.png" alt="" />
            </div>
            <div className="notfound-heading">
                <h1>OOPS! Page not found </h1>
            </div>
            <div className="notfound-btn">
                <NavLink to={'/'} className="notfound-link">
                    Back to home
                </NavLink>
            </div>
        </NotFoundStyles>
    );
};
