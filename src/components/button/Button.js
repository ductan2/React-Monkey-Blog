import React from 'react';
import styled from 'styled-components';
import { Loading } from '../loading/Loading';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const ButtonStyles = styled.button`
    padding: 0 25px;
    font-size: 18px;
    width: 100%;
    color: white;
    font-weight: 600;
    line-height: 1;
    height: 70px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border-radius: 8px;
    background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
    );
    &:disabled {
        opacity: 0.5;
        cursor: no-drop;
    }
`;
export const Button = ({
    type = 'button',
    children,
    isLoading,
    linkTo,
    className,
    onClick = () => {},
    ...props
}) => {
    const child = isLoading ? <Loading></Loading> : children;
    return (
        <ButtonStyles
            disabled={isLoading}
            type={type}
            onClick={onClick}
            {...props}
            className={className}
        >
            {linkTo ? <NavLink to={linkTo}>{child}</NavLink> : child}
            {/* {child}  */}
            {/*WARNING:  */}
        </ButtonStyles>
    );
};
Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']).isRequired,
    isLoading: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func
};
