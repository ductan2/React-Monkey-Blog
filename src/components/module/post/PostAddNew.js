import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '../../button/Button';
import Radio from '../../checkbox/Radio';

import Field from '../../field/Field';
import { Input } from '../../input/Input';
import { Label } from '../../label/Label';

import { postStatus } from '../../../utils/constants';
import slugify from 'slugify';
import { ImageUpload } from '../../image/ImageUpload';
import useImageFireBase from '../../../hook/useImageFirebase';
import Toggle from '../../toggle/Toggle';
import { db } from '../../../firebase/firebase-config';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '../../../context/auth-context';
import { toast } from 'react-toastify';

const PostAddNewStyles = styled.div``;

const PostAddNew = () => {
    // const [progress, setProgress] = useState(0);
    // const [image, setImage] = useState('');
    const { control, handleSubmit, watch, setValue, getValues, reset } =
        useForm({
            mode: 'onChange',
            defaultValues: {
                title: '',
                slug: '',
                status: 1,
                hot: false
            }
        });
    const watchStatus = watch('status');
    const watchHot = watch('hot');
    const { userInfo } = useAuth();

    console.log('🚀  ~  PostAddNew ~  userInfo:', userInfo);
    // const watchCategory = watch('category');
    const {
        handleChangeImage,

        handleDeleteImage,
        image,
        progress
    } = useImageFireBase(setValue, getValues);
    const addPostHandler = async (values) => {
        const cloneValues = { ...values };
        cloneValues.slug = slugify(values.slug || values.title, {
            lower: true
        }); // link
        cloneValues.status = Number(values.status);
        console.log("values" ,values);
        const colRef = collection(db, 'posts'); // create storage posts
        console.log("id",userInfo.uid)
        await addDoc(colRef, {
            ...cloneValues,
            image,
            userId:userInfo.uid,
            auth:userInfo.displayName,
        });
        toast.success('create new post successfully');
        reset({
            title: '',
            slug: '',
            status: 1,
            hot: false,
            image:"",
        });
    };
    useEffect(() => {}, []);

    return (
        <PostAddNewStyles>
            <h1 className="dashboard-heading">Add new post</h1>
            <form onSubmit={handleSubmit(addPostHandler)}>
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Title</Label>
                        <Input
                            control={control}
                            placeholder="Enter your title"
                            name="title"
                        ></Input>
                    </Field>
                    <Field>
                        <Label>Slug</Label>
                        <Input
                            control={control}
                            placeholder="Enter your slug"
                            name="slug"
                        ></Input>
                    </Field>
                </div>

                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    {/* <Field>
                        <Label>Author</Label>
                        <Input
                            control={control}
                            name="auth"
                            placeholder="Find the author"
                        ></Input>
                    </Field> */}
                    <Field>
                        <Label>Status</Label>
                        <div className="flex items-center gap-x-5">
                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) === postStatus.APPROVED
                                }
                                // onClick={() => setValue("status", "approved")}
                                value={postStatus.APPROVED}
                            >
                                Approved
                            </Radio>
                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) === postStatus.PENDING
                                }
                                // onClick={() => setValue("status", "pending")}
                                value={postStatus.PENDING}
                            >
                                Pending
                            </Radio>
                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) === postStatus.REJECT
                                }
                                // onClick={() => setValue("status", "reject")}
                                value={postStatus.REJECT}
                            >
                                Reject
                            </Radio>
                        </div>
                    </Field>
                </div>
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Image</Label>
                        <ImageUpload
                            name="image"
                            deleteImage={handleDeleteImage}
                            progress={progress}
                            onChange={handleChangeImage}
                            className="h-[300px]"
                            image={image}
                        ></ImageUpload>
                    </Field>
                    <Field>
                        <Label>Feature post</Label>
                        <Toggle
                            on={watchHot === true}
                            onClick={() => {
                                setValue('hot', !watchHot);
                            }}
                        ></Toggle>
                    </Field>
                </div>
                <Button type="submit" className="mx-auto">
                    Add new post
                </Button>
            </form>
        </PostAddNewStyles>
    );
};
export default PostAddNew;
