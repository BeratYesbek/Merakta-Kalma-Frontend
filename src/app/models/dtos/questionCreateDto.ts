export class QuestionCreateDto {
    title?: string
    description?: string
    userId?: number
    tags?: string[]
    file?: File[]
}