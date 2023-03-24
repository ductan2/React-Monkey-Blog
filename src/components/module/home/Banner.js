import { signOut } from 'firebase/auth';
import React from 'react';
import styled from 'styled-components';
import { auth } from '../../../firebase/firebase-config';
const BannerStyle = styled.div`
    background: linear-gradient(155deg, #00b4aa 6.67%, #a4d96c 84.1%);
    min-height: 600px;
    .banner {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
    }
    .banner-content {
        width: 50%;
        display: flex;

        align-items: flex-start;
        gap: 40px;
        flex-direction: column;
        /* transform: translateY(50%); */
    }
    .banner-img {
        width: 50%;
    }
    .banner-heading {
        font-size: 48px;
        color: white;
        font-weight: 600;
    }
    .banner-text {
        color: white;
    }
    .banner-btn {
        background-color: white;
        color: ${(props) => props.theme.primary};
        padding: 15px 50px;
        font-weight: 600;
        line-height: 27px;
        border-radius: 8px;
        cursor: pointer;
    }
    .banner-img {
        width: 50%;
    }
`;
export const Banner = () => {
    return (
        <BannerStyle>
            <div className="container">
                <div className="banner">
                    <div className="banner-content">
                        <h3 className="banner-heading">Monkey Blogging</h3>
                        <p className="banner-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ullam, vitae cum omnis eius molestias deleniti
                            fugit dignissimos impedit blanditiis, distinctio
                            repellendus quae itaque optio nihil tempore? Fuga
                            repellat tenetur expedita?
                        </p>
                        <div>
                            <button
                                className="banner-btn"
                                onClick={() => {
                                    signOut(auth);
                                }}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="banner-img">
                        <img src="./banner.png" alt="" />
                    </div>
                </div>
            </div>
        </BannerStyle>
    );
};
