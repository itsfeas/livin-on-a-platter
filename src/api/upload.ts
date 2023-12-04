import { httpClient } from "./http-client/client";

const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const url = `${httpClient.BASE_URL}/upload`;
    return await httpClient.post<ImageUploadResponse>("http://localhost:8080/", formData);
}

export const uploadApi = {
    uploadFile
};