import styles from "./Home.module.scss"
import CardCarousel from "./CardCarousel"
import Panel from "../../components/Panel"
import { useContext, useState } from "react"
import DiscographyPanel from "./DiscographyPanel"
import DataContext from "../../context/data"

export default function Home() {
    const [isDiscographyOpen, setIsDiscographyOpen] = useState(false)
    const data = useContext(DataContext)
    const talent = data?.talent

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
                <Panel text="Full Discography" noInfo={true} action="link" url="/discography" />
                {talent?.reverse().map((item: { name: string }, index: number, array: []) => {

                    return (
                        <Panel key={index} text={item.name} flipped={(index % 2 === 0)} last={index === array.length - 1} action="button" setIsOpen={setIsDiscographyOpen} />
                    )
                })}
            </section>
            <DiscographyPanel isOpen={isDiscographyOpen} setIsOpen={setIsDiscographyOpen} />
        </>
    )
}