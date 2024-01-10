import React from 'react';

export type ViewGenComponentProps = {
    failed: boolean;
    baseImgUrl: string;
    genImages: Array<string>;
}

const ViewGenComponent: React.FC<ViewGenComponentProps> = ({failed, baseImgUrl, genImages}) => {
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-4">View Image</h1>
            <div className="p-20 bg-white rounded mb-4">
                {
                    !failed && <>
                        <img src={baseImgUrl} alt="Selected Image" className="h-1/2" />
                        { genImages.map((imgUrl) => <img src={imgUrl} alt="Selected Image" className="h-1/2" />) }
                    </>
                }
                {
                    failed && <h1 className="text-2xl font-bold text-red-600 mb-4">Failed to generate images</h1>
                }
            </div>
        </div>
    );
};

export default ViewGenComponent;
