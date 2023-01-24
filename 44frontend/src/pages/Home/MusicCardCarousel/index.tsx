import MusicCard from "../MusicCard";
import styles from "./MuiscCardCarousel.module.scss"

export default function MusicCardCarousel() {
    return (
        <div className={styles.container} >
            <div className={styles.card} data-card="2">
                <MusicCard />
            </div>
            <div className={styles.card} data-card="1">
                <MusicCard />
            </div>
            <div className={styles.card} data-card="0">
                <MusicCard />
            </div>
        </div>
    )
}