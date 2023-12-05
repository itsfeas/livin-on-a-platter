
type BaseServerResponse = {
    status: string = "ok" | "error"
}

type ImageUploadResponse = BaseServerResponse & {
    id: string
}