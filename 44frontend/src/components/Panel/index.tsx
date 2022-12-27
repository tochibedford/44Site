import styles from "./Panel.module.scss"
import arrow from "./images/arrow_blue.svg"

interface IPanel {
    text: string;
    last?: boolean;
    flipped: boolean;
    noInfo: boolean;
}

export default function Panel({ text, last = false, flipped = false, noInfo = false }: IPanel) {
    return (
        <div className={`${styles.container} ${last ? styles.last__panel : ""} ${flipped ? styles.flipped : ""}`}>
            <div className={styles.text__content}>{text}</div>
            <div className={styles.divider} />
            <div className={styles.panel__action__detail}>
                {!noInfo ? (
                    <div className={styles.panel__detail__container}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad ex deleniti ratione a nam tempore dolorem tempora rem voluptatum!
                    </div>) :
                    (<div className={styles.arrow__container}>
                        <img src={arrow} alt="arrow icon" className={flipped ? styles.image__flipped : ""} />
                    </div>)
                }

            </div>
        </div>
    )
}
