import { NotesOption } from './notes'

export interface ITag {
    id: number
    name: string
}

export interface IImage {
    url: string
    name: string
    extname: 'png' | 'jpg' | 'jpeg'
    size: number
    mimeType: 'image/png' | 'image/jpeg'
}

export interface IRestaurant {
    id: number
    name: string
    description: string
    lat: number
    lng: number
    tags: ITag[]
    notes: INotes[]
    image: IImage | null
    createdAt: string // parsable date
    averagePrice: number | null
    userId: number
    choices: IChoice['userId'][]
    reviews: IReview[]
}

export interface IReview {
    id: number
    restaurantId: number
    userId: number
    comment: string
    image: IImage | null
    createdAt: string
    updatedAt: string
}

export interface INotes {
    id: number
    restaurantId: number
    userId: number
    note: NotesOption
    updatedAt: string
}

export interface IChoice {
    id: number
    restaurantId: number
    userId: number
    createdAt: Date
}
