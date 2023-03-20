import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../button/Button';
const HeaderStyle = styled.div`
    .header-main {
        display: flex;
        align-items: center;
        padding: 40px 0;
    }
    .header-logo {
        display: block;
        max-width: 50px;
    }
    .header-menu {
        display: flex;
        align-items: center;
        gap: 25px;
        li {
            font-size: 18px;
            line-height: 27px;
            font-weight: 600;
        }
    }
    .header-right {
        margin-left: auto;
        display: flex;
        align-items: center;
        margin-right: 15px;
    }
    .header-search {
        max-width: 320px;
        position: relative;
        margin-right: 20px;
        input {
            border: 1px solid #cfcfcf;
            padding: 15px 50px 15px 20px;
            border-radius: 8px;
        }
    }
    .header-icon-search {
        position: absolute;
        top: 50%;
        right: 10%;
        cursor: pointer;
        transform: translateY(-50%);
    }
`;
const menuLink = [
    { title: 'Home', link: '/#' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contact', link: '/contact' }
];
export const Header = () => {
    return (
        <HeaderStyle>
            <div className="container">
                <div className="header-main">
                    <NavLink to={'/'}>
                        <img
                            className="header-logo"
                            src="./logo1x.png"
                            alt="logo-header"
                        />
                    </NavLink>
                    <ul className="header-menu">
                        {menuLink.map((item, index) => {
                            return (
                                <li key={index} className="header-menu-item">
                                    <NavLink to={item.link}>
                                        {item.title}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="header-right">
                        <div className="header-search">
                            <input type="text" placeholder="Search posts" />
                            <div className="header-icon-search">
                                <svg
                                    width="18"
                                    height="17"
                                    viewBox="0 0 18 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <ellipse
                                        cx="7.66669"
                                        cy="7.05161"
                                        rx="6.66669"
                                        ry="6.05161"
                                        stroke="#999999"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                                        stroke="#999999"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                                        stroke="#999999"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="header-btn">
                            <Button
                                style={{ maxWidth: '200px', height: '56px' }}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderStyle>
    );
};
