"use client";

import React, { useContext, useEffect } from 'react';
import FileContext from './context/file-context';
import { useRouter } from 'next/navigation';
import BaseButton from '../common/btn/common-btn';

const FileUploadComponent: React.FC = () => {
    const { file, setFile } = useContext(FileContext);
    const router = useRouter();

    const handleConfirm = () => {
        setFile(null);
        router.push('/success');
    };

    const handleCancel = () => {
        setFile(null);
    };

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-4">Confirm Image Selection</h1>
            {file && (
                <div className="p-20 bg-white rounded mb-4">
                    <img src={URL.createObjectURL(file)} alt="Selected Image" className="max-w-full" />
                </div>
            )}
            <div className="flex space-x-4">
                <BaseButton onClick={handleConfirm} buttonType='general'>Confirm</BaseButton>
                <BaseButton onClick={handleCancel} buttonType='cancel'>Cancel</BaseButton>
            </div>
        </div>
    );
};

export default FileUploadComponent;
