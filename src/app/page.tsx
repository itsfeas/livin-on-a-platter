import Block from '@/components/blocks/block';
import BaseLayout from '@/components/common/layout/base-layout';
import FileContext from '@/components/upload/context/file-context';
import FileUpload from '@/components/upload/file-upload';
import { useState } from 'react';

const ViewPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  return (
    <BaseLayout>
      <Block minHeightScreen>
        <FileContext.Provider value={{
          file,
          setFile
          }} >
          <FileUpload />
        </FileContext.Provider>
      </Block>
    </BaseLayout>
  )
}

export default ViewPage;