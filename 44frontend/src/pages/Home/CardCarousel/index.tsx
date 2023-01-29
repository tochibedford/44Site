import { useContext, useEffect, useRef, useState, useMemo } from "react"
import DataContext, { urlFor, workSchema } from "../../../context/data"
import MusicCard from "../MusicCard"
import styles from "./CardCarousel.module.scss"

type ILoopNode<T> = {
    value: T
    next: LoopNode<T> | undefined
    prev: LoopNode<T> | undefined
}

class LoopNode<T> implements ILoopNode<T> { // a custom linked list for the carousel
    value: T
    next: LoopNode<T> | undefined
    prev: LoopNode<T> | undefined

    constructor(val: T) {
        this.value = val
        this.next;
        this.prev;
    }

}

function loopedListFromArray<T>(arr: T[]) { //converts an array into a Looped Link List and returns the head
    const head = new LoopNode(arr[0])
    let prev = null
    let curr = head

    arr.forEach((item, index) => {
        if (index !== 0) {
            const node = new LoopNode(item)
            curr.next = node
            prev = curr
            curr = node
            curr.prev = prev
        }
    })

    curr.next = head
    head.prev = curr

    return head

}

export default function CardCarousel() {
    const data = useContext(DataContext)
    const talent = data?.talent
    const work = data?.work

    const loopedListHead = useMemo(() => { // this useMemo hook prevents the carousel from calculating a whole new set of random indexes everytime it renders
        //select 10 random indexes from the work array
        const randomWorkIndexes = Array(10).fill(undefined).map(() => {
            return Math.random()
        })

        const randomWorkSchema = [...randomWorkIndexes]?.map(item => {
            return work?.[Math.floor(item * work?.length)] as workSchema
        })

        let carouselElements = randomWorkSchema?.map((item) => {

            const features = item?.features !== undefined ? "feat: " + (new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })).format(item.features) : ""
            return (
                <div className={styles.card__wrapper} key={item._id}>
                    <MusicCard title={item?.title} artistName={item?.artistName} features={features !== "feat: " ? features : ""} coverArt={urlFor(item?.cover.asset._ref).width(500).url()} />
                </div>
            )
        })

        //turn array into looped link list
        const loopedListHead = loopedListFromArray(carouselElements)
        return loopedListHead

    }, [data])

    const [carousel, setCarousel] = useState<(LoopNode<JSX.Element> | undefined)[]>([loopedListHead, loopedListHead.next, loopedListHead.next?.next, loopedListHead.next?.next?.next])
    const carouselContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const t = setInterval(() => {
            if (!carouselContainerRef?.current?.matches(":hover")) {
                setCarousel([carousel[1], carousel[2], carousel[3], carousel[3]?.next])
            }
        }, 4000)

        return () => {
            clearInterval(t)
        }
    }, [carousel])
    return (
        <div className={styles.container} ref={carouselContainerRef}>
            {carousel.map(item => {
                return item?.value
            })}
        </div>
    )
}