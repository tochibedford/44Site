import { createContext } from "react"

const DataContext = createContext<{
    talent: any,
    work: any,
    feed: any
    // talent: {
    //     _id: string
    //     _type: string
    //     name: string
    //     shortBio: string
    //     profileImage: {
    //         asset: {
    //             _ref: string
    //         }
    //     }
    // },
} | null>(null)

export default DataContext