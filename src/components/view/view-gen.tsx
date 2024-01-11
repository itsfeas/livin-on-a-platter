import React from 'react';

export type ViewGenComponentProps = {
    failed: boolean;
    baseImgUrl: string;
    genImages: Array<string>;
}

const ImageViewComponent: React.FC<ViewGenComponentProps> = ({baseImgUrl, genImages}) => {
    return <div className='flex flex-row'>
        <img src={baseImgUrl} alt="Selected Image" className="object-contain" />
        <div className='flex flex-col'>
            {genImages.map((imgUrl) => <img src={imgUrl} alt="Selected Image" className="object-contain" />) }
        </div>
    </div>
}

const ViewGenComponent: React.FC<ViewGenComponentProps> = ({failed, baseImgUrl, genImages}) => {
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-4">View Image</h1>
            <div className="p-20 mb-4 rounded-3xl">
                { !failed && <ImageViewComponent baseImgUrl={baseImgUrl} genImages={genImages} failed={false} /> }
                { failed && <h1 className="text-2xl font-bold text-red-600 mb-4">Failed to generate images</h1> }
            </div>
        </div>
    );
};

export default ViewGenComponent;
