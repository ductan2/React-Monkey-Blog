import React from 'react';
import styled from 'styled-components';

const LabelStyle = styled.label`
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: ${(props) => props.theme.grayDank};
    cursor: pointer;
`;
export const Label = ({ htmlFor = '', children, ...props }) => {
    return (
        <LabelStyle htmlFor={htmlFor} {...props}>
            {children}
        </LabelStyle>
    );
};
