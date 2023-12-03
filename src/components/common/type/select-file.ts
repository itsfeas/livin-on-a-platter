export default interface SelectFileInterface {
    setSelectedFile: (value: React.SetStateAction<File | null>) => void
}