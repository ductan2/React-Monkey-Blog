import React, { Fragment, useState } from 'react';
import { IconEyeClose } from '../components/icon/IconEyeClose';
import { IconEyeOpen } from '../components/icon/IconEyeOpen';
import { Input } from '../components/input/Input';

export const InputPasswordToggle = ({control}) => {
   const [togglePassword,setTogglePassword]=useState(true); 
   return (
        <Fragment>
            <Input
                type={`${togglePassword ? 'password' : 'text'}`}
                name="password"
                placeholder="Enter your password"
                control={control}
            >
                {togglePassword ? (
                    <IconEyeClose
                        className="input-icon"
                        onClick={() => setTogglePassword(false)}
                    ></IconEyeClose>
                ) : (
                    <IconEyeOpen
                        className="input-icon"
                        onClick={() => setTogglePassword(true)}
                    ></IconEyeOpen>
                )}
            </Input>
        </Fragment>
    );
};
