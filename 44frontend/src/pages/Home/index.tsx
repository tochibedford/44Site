import styles from "./Home.module.scss"
import CardCarousel from "./CardCarousel"
import Panel from "../../components/Panel"
import { useState } from "react"
import DiscographyPanel from "./DiscographyPanel"

export default function Home() {
    const [isDiscographyOpen, setIsDiscographyOpen] = useState(false)
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.page__info}>
                    <h1 className={styles.title}>44DB</h1>
                    <h2 className={styles.subtitle}>The Super Producer Collective Redefining The Music Industry</h2>
                </div>
                <div className={styles.carousel__container}><CardCarousel /></div>
            </section>
            <section className={styles.panels__container}>
                {(["Full Discography", "JOHN WAV", "TOCHI BEDFORD", "JOHNSON IP"]).map((item, index, array) => {

                    if (item === "Full Discography") {
                        return (
                            <Panel key={index} text={item} flipped={!(index % 2 === 0)} last={index === array.length - 1} noInfo={item === "Full Discography"} action="link" url="/discography" />
                        )
                    } else {
                        return (
                            <Panel key={index} text={item} flipped={!(index % 2 === 0)} last={index === array.length - 1} action="button" setIsOpen={setIsDiscographyOpen} />
                        )
                    }
                })}
            </section>
            <DiscographyPanel isOpen={isDiscographyOpen} setIsOpen={setIsDiscographyOpen} />
        </>
    )
}