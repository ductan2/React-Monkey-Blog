import React, { Fragment } from 'react';

export const ImageUpload = (props) => {
    const {
        name = '',
        image,
        deleteImage=()=>{},
        progress = 0,
        className = '',
        onChange,
        ...rest
    } = props;
    return (
        <label
            className={`cursor-pointer items-center flex justify-center bg-gray-100 border border-dashed w-full
            rounded-lg min-h-[200px] ${className} relative overflow-hidden group`}
        >
            <input
                type="file"
                name={name}
                className="hidden-input"
                onChange={onChange}
                {...rest}
            />
            {!image ? (
                <div className="flex flex-col items-center text-center pointer-events-none ">
                    <img
                        src="/img-upload.png"
                        alt="upload-img"
                        className="max-w-[80px] mb-5"
                    />
                    <p className="font-semibold">Choose photo</p>
                </div>
            ) : (
                <Fragment>
                    <img
                        src={image}
                        alt="upload-img"
                        className="w-full mb-5 object-cover"
                    />
                    <button className='p-5 transition-all rounded-full opacity-0 bg-white z-50 text-red-400 absolute top-[50%] left-[50%] translate-x-[-50%] 
                    translate-y-[-50%] group-hover:opacity-100' onClick={deleteImage} >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>
                </Fragment>
            )}
            <div
                className="absolute w-10 h-1 bg-green-400 bottom-0 left-0 transition-all image-upload-progress"
                style={{ width: `${progress}%` }}
            ></div>
        </label>
    );
};
