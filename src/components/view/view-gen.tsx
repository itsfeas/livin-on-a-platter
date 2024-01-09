import React from 'react';

interface ViewComponentComponentProps {
    baseImgUrl: string;
    genImages: Array<string>;
}

const ViewGenComponent: React.FC<ViewComponentComponentProps> = ({baseImgUrl, genImages}) => {
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-4">View Image</h1>
            <div className="p-20 bg-white rounded mb-4">
                <img src={baseImgUrl} alt="Selected Image" className="h-1/2" />
                { genImages.map((imgUrl) => <img src={imgUrl} alt="Selected Image" className="h-1/2" />) }
            </div>
        </div>
    );
};

export default ViewGenComponent;
