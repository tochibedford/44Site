import styles from "./DiscographyPanel.module.scss"
import closeIcon from "./assets/closeIcon.png"
import MusicGridItem from "./components/MusicGridItem";

type IDiscographyPanel = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DiscographyPanel({ isOpen, setIsOpen }: IDiscographyPanel) {
    return (
        <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
            <div className={styles.top}>
                <img src={closeIcon} className={styles.close__icon} alt="close icon" onClick={() => { setIsOpen(false) }} />
            </div>
            <div className={styles.music__grid__container}>
                <div className={styles.inner__container}>
                    {
                        Array(40).fill("").map((_, index) => {
                            const MusicGridObject = {
                                title: "Rather Be",
                                artist: "Saint Austin",
                                features: "Saint, John & Tochi",
                                album_art: `https://picsum.photos/id/${index + 10}/200/300`,
                            };
                            return <MusicGridItem key={index} {...MusicGridObject} controllerClass={styles.item} />
                        })
                    }


                </div>
            </div>
        </div>
    )
}