
type BaseServerResponse = {
    status: string
}

type ImageUploadResponse = BaseServerResponse & {
    id: string
}