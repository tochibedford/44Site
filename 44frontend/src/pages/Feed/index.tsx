import styles from "./Feed.module.scss"
import { useContext, useState } from "react"
import DataContext, { feedSchema, urlFor } from "../../context/data"
import Panel from "../../components/Panel"


export default function Feed() {
    const data = useContext(DataContext)
    let feed = data?.feed
    feed = feed?.reduce((acc: feedSchema[], curr: feedSchema) => {
        return [curr].concat(acc)
    }, [])
    return (
        <>
            <section className={styles.feed}>
                <div className={styles.page__info}>
                    <h1 className={styles.title}>FEED</h1>
                    <h2 className={styles.subtitle}>Our Collective: Award-Winning, Nominated, On TV, and In the Press</h2>
                </div>
            </section>
            <section className={styles.feed_info}>
                {
                    feed?.map((item, index: number, array: feedSchema[]) => {
                        return (
                            <Panel key={index} icon={urlFor(item.logo.asset._ref).url()} text={item.publicationName} last={true} isExternalLink={true} subtitle={item.title} noInfo={true} action="link" url={item.link} />
                        )
                    })
                }
            </section>
        </>
    )
}