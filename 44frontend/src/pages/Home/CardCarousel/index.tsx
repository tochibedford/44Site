import { ReactNode, useState } from "react"
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

export default function CardCarousel({ setNum }: { setNum: React.Dispatch<React.SetStateAction<number>> }) {
    const carouselElements: ReactNode[] = Array(3).fill(
        <div className={styles.card__wrapper}>
            <MusicCard />
        </div>
    ) //generate an 20 item array of music cards

    //turn array into looped link list
    const loopedListHead = loopedListFromArray(carouselElements)
    const [carousel, setCarousel] = useState([loopedListHead.prev, loopedListHead, loopedListHead.next, loopedListHead.next?.next])

    return (
        <div className={styles.container}>
            {carousel.map(item => item?.value)}
        </div>
    )
}