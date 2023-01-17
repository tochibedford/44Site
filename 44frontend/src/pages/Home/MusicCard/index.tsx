import styles from "./MusicCard.module.scss"
import cardImage from "./images/card_pic.jpg"



export default function MusicCard() {
    return (
        <div className={styles.container} >
            <div className={styles.image__container}>
                <img src={cardImage} alt="card image" />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>Rather Be</div>
                <div className={styles.artist}>Saint Austin</div>
                <div className={styles.features}>John & Tochi</div>
            </div>
        </div>
    )
}