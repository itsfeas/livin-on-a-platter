import Block from '@/components/blocks/block'
import FileUpload from '@/components/file-upload'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Block minHeightScreen>
        <FileUpload />
      </Block>
    </main>
  )
}
