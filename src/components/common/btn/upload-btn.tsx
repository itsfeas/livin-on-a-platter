"use client";
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, HTMLAttributes, useState } from 'react';

interface UploadButtonInterface {
    redirectUrl: string
}

const UploadButton: React.FC<UploadButtonInterface> = ({
    redirectUrl
}) => {
    const router = useRouter();
    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        if (!file) {
            alert("Please select a another file!")
            return;
        };
        localStorage.setItem("file", file.webkitRelativePath);
        router.push(redirectUrl);
    };


    return (
        <div className="p-20 bg-white rounded">
            <label className="flex items-center justify-center p-4 border-dashed border-2 border-gray-300 rounded cursor-pointer">
                <span className="text-gray-800">Choose a file</span>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".jpg, .jpeg, .png"
                />
            </label>
        </div>
    );
}

export default UploadButton;