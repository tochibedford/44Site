import styles from "./Home.module.scss"
import CardCarousel from "./CardCarousel"

export default function Home() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.page__info}>
                    <h1 className={styles.title}>44DB</h1>
                    <h2 className={styles.subtitle}>The Super Producer Collective Redefining The Music Industry</h2>
                </div>
                <div className={styles.carousel__container}><CardCarousel /></div>
            </section>
        </>
    )
}