import { Tag } from './tags'

export interface Article {
    _id: string
    title: string
    slug: string
    body: string
    tags: Tag[]
}
