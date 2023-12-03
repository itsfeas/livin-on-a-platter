import React from 'react';
import UploadBtn from '@/components/common/btn/upload-btn';

const FileUpload: React.FC = () => {
    const url = "/view";
    const handleFileChange = (file: File) => {
        // localStorage.setItem("file", file!.webkitRelativePath)
        // const formData = new FormData();
        // if (!file) return;
        // formData.append('file', file);
        // const response = fetch('http://localhost:8080/', {
        //     method: 'POST',
        //     body: formData,
        // }).then(value => console.log(value));
    };

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-4 text-white">File Upload</h1>
            <UploadBtn redirectUrl={url}/>
        </div>
    );
};

export default FileUpload;
