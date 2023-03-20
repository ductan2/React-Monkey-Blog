import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
import { Label } from '../components/label/Label';
import { Input } from '../components/input/Input';
import { useForm } from 'react-hook-form';
import { IconEyeClose } from '../components/icon/IconEyeClose';
import { IconEyeOpen } from '../components/icon/IconEyeOpen';
import { Button } from '../components/button/Button';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase-config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';
import { AuthSignPage } from './AuthSignPage';

const schema = Yup.object({
    fullname: Yup.string().required('Full name is invalid !'),
    email: Yup.string().email().required('Email is invalid !'),
    password: Yup.string()
        .required('Password is invalid !')
        .min(6, 'Password more than 8 character')
});
const AccountLinkStyle = styled.div`
    margin: 30px 0;
    a {
        text-decoration: none;
    }
    span {
        color: ${(props) => props.theme.primary};
    }
`;
const SignUpPage = (props) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        watch
    } = useForm({
        // mode: 'onChange',
        //WARNING: mode onChange affect password min

        resolver: yupResolver(schema)
    });
    const [togglePassword, setTogglePassword] = useState(true);
    const handleSignUp = async (values) => {
        if (!isValid) return;
        const user = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
        );
        await updateProfile(auth.currentUser, { displayName: values.fullname });
        const colRef = collection(db, 'users');
        await addDoc(colRef, {
            userName: values.fullname,
            email: values.email,
            password: values.password
        });
        toast.success('Email is create successfully');
        // navigate('/')
    };

    useEffect(() => {
        const notifyError = Object.values(errors);
        console.log(notifyError);
        if (notifyError.length > 0) {
            // error
            toast.error(notifyError[0]?.message, {
                pauseOnHover: false,
                delay: 100,
                theme: 'light',
                autoClose: 5000
            });
            // toast.error("This is error")
        }
    }, [errors]);

    return (
        <AuthSignPage>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="field">
                    <Label htmlFor="fullname">Fullname</Label>
                    <Input
                        type="text"
                        name="fullname"
                        placeholder="Enter your full name"
                        control={control}
                    ></Input>
                </div>
                <div className="field">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        control={control}
                    ></Input>
                </div>
                <div className="field">
                    <Label htmlFor="password">Password</Label>
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
                </div>
                <AccountLinkStyle>
                    You already have an account
                    <Link to={'/sign-in'}>
                        <span> Login</span>
                    </Link>
                </AccountLinkStyle>
                <Button
                    type="submit"
                    isLoading={isSubmitting}
                    style={{ margin: '0 auto', maxWidth: '300px' }}
                >
                    Sign Up
                </Button>
            </form>
        </AuthSignPage>
    );
};

export default SignUpPage;
