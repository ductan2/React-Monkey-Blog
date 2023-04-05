import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable
} from 'firebase/storage';
import { useState } from 'react';

export default function useImageFireBase(setValue, getValues) {
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState('');
    if (!setValue || !getValues) return;

    const handleDeleteImage = async () => {
        const storage = getStorage();

        const imageRef = ref(storage, 'images/' + getValues('image_name'));

        // Delete the file
        await deleteObject(imageRef)
            .then(() => {
                // File deleted successfully
                console.log('Delete image success!');
                setImage('');
                setProgress(0);
            })
            .catch((error) => {
                console.log(error);
                console.log('Delete image error!');
            });
    };
    const handleUploadImage = (file) => {
        const storage = getStorage(); // get storage
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + file?.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log(error.code);
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                });
            }
        );
    };
    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const storage = getStorage(); // get storage
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                console.log(error.code);
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setImage(downloadURL);
                });
            }
        );
        console.log(file);
        setValue('image_name', file.name); // put in values
    };
    return {
        handleChangeImage,
        handleDeleteImage,
        handleUploadImage,
        progress,
        image
    };
}
