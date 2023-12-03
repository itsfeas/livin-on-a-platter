import React, { ChangeEvent, HTMLAttributes } from 'react';
import SelectFileInterface from '@/components/common/type/select-file';

const UploadBtn: React.FC<SelectFileInterface> = ({
    setSelectedFile
}) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
    };
    return (
        <div className="p-20 bg-white rounded">
            <label className="flex items-center justify-center p-4 border-dashed border-2 border-gray-300 rounded cursor-pointer">
                <span className="text-gray-800">Choose a file</span>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
}

export default UploadBtn;