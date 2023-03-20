
import React from 'react';
import { useController } from 'react-hook-form';
import styled from 'styled-components';
import { IconEyeClose } from '../icon/IconEyeClose';
import { IconEyeOpen } from '../icon/IconEyeOpen';
const InputStyle = styled.div`
    position: relative;
    width: 100%;
    input {
        width: 100%;
        border-radius: 8px;
        padding: ${(props) =>
            props.hasIcon ? '20px 60px 20px 20px ' : '20px'};
        border: 1px solid transparent;
        background-color: ${(props) => props.theme.grayLight};
        transition: all 0.2s linear;
    }
    input:focus {
        background-color: white;
        border: 1px solid ${(props) => props.theme.primary};
    }
    input::-webkit-input-placeholder {
        color: #84878b;
    }
    .input-icon{
        position:absolute;
        top: 50%;
        right: 20px;
        transform:translateY(-50%);
        cursor:pointer;
    }
`;

export const Input = ({
    type = 'text',
    name = '',
    hasIcon = true,
    children,
    control,
    ...props
}) => {
    const { field } = useController({
        control,
        name,
        defaultValue: ''
    });
    return (
        <InputStyle hasIcon={hasIcon}>
            {/* id === name  */}
            <input id={name} type={type} {...field} {...props} />
           {children}
        </InputStyle>
    );
};
