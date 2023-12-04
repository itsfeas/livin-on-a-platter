import React, { Dispatch, SetStateAction } from "react";

export interface FileContextInterface {
    file: File | null;
    setFile: Dispatch<SetStateAction<File | null>>;
}

const FileContext = React.createContext <FileContextInterface>({
    file: null,
    setFile: () => {}
});

export default FileContext;