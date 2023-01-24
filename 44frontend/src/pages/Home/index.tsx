import styles from "./Home.module.scss"
import CardCarousel from "./CardCarousel"
import Panel from "../../components/Panel"
import { useContext, useState } from "react"
import DiscographyPanel from "./DiscographyPanel"
import DataContext, { talentSchema, urlFor } from "../../context/data"

export default function Home() {
    const [isDiscographyOpen, setIsDiscographyOpen] = useState(false)
    const data = useContext(DataContext)
    let talent = data?.talent
    talent = talent?.reduce((acc: talentSchema[], curr: talentSchema) => {
        return [curr].concat(acc)
    }, [])
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
                {talent?.map((item, index: number, array: talentSchema[]) => {
                    return (
                        <Panel key={item._id} text={item.name} shortBio={item.shortBio} flipped={(index % 2 === 0)} last={index === array.length - 1} action="button" photo={urlFor(item.profileImage.asset._ref).width(500).url()} setIsOpen={setIsDiscographyOpen} />
                    )
                })}
            </section>
            <DiscographyPanel isOpen={isDiscographyOpen} setIsOpen={setIsDiscographyOpen} />
        </>
    )
}