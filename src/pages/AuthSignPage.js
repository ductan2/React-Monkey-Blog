import React from 'react';
import styled from 'styled-components';
const AuthSignStyles = styled.div`
    min-height: 10px;
    padding: 40px;
    .logo {
        margin: 0 auto 20px;
    }
    .heading {
        text-align: center;
        color: ${(props) => props.theme.primary};
        margin-bottom: 60px;
        font-weight: 700;
    }
    form {
        width: 600px;
        margin: auto;
    }
    .field {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 40px;
    }
`;
export const AuthSignPage = ({ children }) => {
    return (
        <AuthSignStyles>
            <div className="container">
                <img src="/logo1x.png" alt="" className="logo" />
                <h1 className="heading">Monkey Blogging</h1>
                {children}
            </div>
        </AuthSignStyles>
    );
};
