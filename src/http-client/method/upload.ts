import { httpClient } from "../client";

const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    return await httpClient.post(httpClient.SERVER + "upload", formData, {
        headers: {'Content-Type': 'multipart/form-data'}
    });
}

export default uploadFile;