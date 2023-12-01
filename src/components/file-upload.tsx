"use client";

import React, { ChangeEvent, useState } from 'react';

const FileUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-4 text-white">File Upload</h1>
            <div className="p-20 bg-white rounded">
                <label className="flex items-center justify-center p-4 border-dashed border-2 border-gray-300 rounded cursor-pointer">
                    <span className="text-gray-800">{selectedFile ? selectedFile.name : "Choose a file" }</span>
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
            </div>
        </div>
    );
};

export default FileUpload;
