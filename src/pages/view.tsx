import Block from '@/components/blocks/block';
import FileView from '@/components/upload/file-view';

const View: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Block minHeightScreen>
                {/* <FileView /> */}
            </Block>
        </main>
    )
}

export default View;