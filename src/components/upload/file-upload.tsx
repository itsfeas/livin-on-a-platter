"use client";

import React, { ChangeEvent, useState } from 'react';
import UploadBtn from '@/components/common/btn/upload-btn';
import SelectFileInterface from '@/components/common/type/select-file';

const FileUpload: React.FC<SelectFileInterface> = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
        const formData = new FormData();
        if (!file) return;
        formData.append('file', file);
        const response = fetch('http://localhost:8080/', {
            method: 'POST',
            body: formData,
        }).then(value => console.log(value));
    };

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-4 text-white">File Upload</h1>
            <UploadBtn setSelectedFile={setSelectedFile}/>
        </div>
    );
};

export default FileUpload;
