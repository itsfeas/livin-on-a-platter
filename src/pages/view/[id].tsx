"use client";

import Block from '@/components/blocks/block';
import BaseLayout from '@/components/common/layout/base-layout';
import FileContext from '@/components/upload/context/file-context';
import FileUpload from '@/components/upload/file-upload';
import FileView from '@/components/upload/file-view';
import ViewGenComponent from '@/components/view/view-gen';

const ViewPage: React.FC = () => {
    return (
        <BaseLayout>
            <Block minHeightScreen>
                <ViewGenComponent baseImgUrl={''} genImages={[]} />
            </Block>
        </BaseLayout>
    )
}

export default ViewPage;