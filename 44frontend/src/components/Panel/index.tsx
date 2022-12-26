import styles from "./Panel.module.scss"

interface IPanel {
    text: string;
    last?: boolean;
    flipped: boolean;
}

export default function Panel({ text, last = false, flipped = false }: IPanel) {
    return (
        <div className={`${styles.container} ${last ? styles.last__panel : ""} ${flipped ? styles.flipped : ""}`}>
            <div className={styles.text__content}>{text}</div>
            <div className={styles.divider} />
            <div className={styles.panel__action__detail}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima est dicta suscipit porro dolore aliquid omnis id voluptatum, accusamus, officia reprehenderit incidunt placeat beatae expedita? Numquam culpa dolore inventore a.
            </div>
        </div>
    )
}
