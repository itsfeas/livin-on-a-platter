
type BaseServerResponse = {
    status: int,
    msg: string,
}

type DataServerResponse = {
    status: int,
    msg: string,
    data: any,
}

type ImageUploadResponse = DataServerResponse & {
    data: {
        id: string,
    }
}