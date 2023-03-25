import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../components/button/Button';
import { Input } from '../components/input/Input';
import { Label } from '../components/label/Label';
import { useAuth } from '../context/auth-context';
import { AuthSignPage } from './AuthSignPage';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase-config';
import { IconEyeOpen } from '../components/icon/IconEyeOpen';
import { IconEyeClose } from '../components/icon/IconEyeClose';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { InputPasswordToggle } from './InputPasswordToggle';
const schema = Yup.object({
    email: Yup.string().email().required('Email is invalid !'),
    password: Yup.string()
        .required('Password is invalid !')
        .min(6, 'Password more than 8 character')
});
const AccountLinkStyle = styled.div`
    margin: 30px 0;
    a{
        text-decoration: none;
    }
    span {
        color: ${(props) => props.theme.primary};
    }
`;
export const SignInpage = () => {
    const {
        handleSubmit,
        control,
        formState: { isValid, isSubmitting, errors }
    } = useForm({ resolver: yupResolver(schema) });
    const [togglePassword, setTogglePassword] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const notifyError = Object.values(errors);
        if (notifyError.length > 0) {
            // error
            toast.error(notifyError[0]?.message, {
                pauseOnHover: false,
                delay: 100,
                theme: 'light',
                autoClose: 5000
            });
        }
    }, [errors]);
    const { userInfo } = useAuth();
    useEffect(() => {
        if (userInfo?.email) {
            navigate('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSignIn = async (values) => {
        if (!isValid) return;
        await signInWithEmailAndPassword(auth, values.email, values.password);
        navigate('/');
    };
    return (
        <AuthSignPage>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <div className="field">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        control={control}
                    ></Input>
                </div>
                <div className="field">
                    <Label htmlFor="password">Password</Label>
                   <InputPasswordToggle control={control}></InputPasswordToggle>
                </div>
                <AccountLinkStyle >
                    You have not had an account
                    <Link to={'/sign-up'}>
                        <span>Register an account</span>
                    </Link>
                </AccountLinkStyle>
                <Button
                    type="submit"
                    isLoading={isSubmitting}
                    className="w-full mx-auto max-w-[300px]"
                >
                    Sign In
                </Button>
            </form>
        </AuthSignPage>
    );
};
