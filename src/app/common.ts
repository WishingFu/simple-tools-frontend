export interface Result<T> {
    code: number,
    message?: string,
    data?: T
}

export interface LocalFile {
    id: string,
    originName: string,
    fileSize: number,
    uploadTime: Date
}

export interface FileEvent {
    fileId: string,
    eventType: 'ADD' | 'MODIFIED' | 'DELETED'
}