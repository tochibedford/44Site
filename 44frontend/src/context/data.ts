import { createContext } from "react"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import client from "../client"

type imageSchema = {
    asset: {
        _ref: string
    }
}

type schemaBaseType = {
    _id: string
    _type: string
}

export type workSchema = schemaBaseType & {
    title: string
    features: string[]
    artistName: string
    cover: imageSchema
    contributor: { _ref: string }[]
}

export type feedSchema = schemaBaseType & {
    title: string
    publicationName: string
    link: string
    logo: imageSchema
}

export type talentSchema = schemaBaseType & {
    name: string
    shortBio: string
    profileImage: imageSchema
}

const DataContext = createContext<{
    work: workSchema[]
    feed: feedSchema[]
    talent: talentSchema[]
} | null>(null)

export const imgBuilder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return imgBuilder.image(source)
}

export default DataContext