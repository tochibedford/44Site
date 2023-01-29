import styles from "./MusicCard.module.scss"

type IMusicCard = {
    title: string
    coverArt: string
    artistName: string
    features: string
}

export default function MusicCard({ title, coverArt, artistName, features }: IMusicCard) {
    return (
        <div className={styles.container} >
            <div className={styles.image__container}>
                <img src={coverArt} alt="card image" />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.artist}>{artistName}</div>
                <div className={styles.features}>{features}</div>
            </div>
        </div>
    )
}