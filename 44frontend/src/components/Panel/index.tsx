import styles from "./Panel.module.scss"
import arrow from "./images/arrow_blue.svg"
import { Link } from "react-router-dom"

interface IPanelBase {
    text: string;
    last?: boolean;
    flipped?: boolean;
    noInfo?: boolean;
}

type IPanelConditional = {
    action: "link";
    url: string
    icon?: string;
    setIsOpen?: never;
} | {
    action: "button";
    icon?: never;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    url?: never
}

type IPanel = IPanelBase & IPanelConditional

export default function Panel({ text, last = false, flipped = false, noInfo = false, icon = arrow, action = "link", url, setIsOpen }: IPanel) {
    if (action === "link" && url) { // panel acts as a link
        return (
            <Link to={url} className={`${styles.container} ${last ? styles.last__panel : ""} ${flipped ? styles.flipped : ""}`}>
                <div className={styles.text__content}>{text}</div>
                <div className={styles.divider} />
                <div className={styles.panel__action__detail}>
                    {!noInfo ? (
                        <div className={styles.panel__detail__container}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad ex deleniti ratione a nam tempore dolorem tempora rem voluptatum!
                        </div>) :
                        (<div className={styles.arrow__container}>
                            <img src={icon} alt="arrow icon" className={flipped ? styles.image__flipped : ""} />
                        </div>)
                    }

                </div>
            </Link>
        )
    } else {
        return (
            <div className={`${styles.container} ${last ? styles.last__panel : ""} ${flipped ? styles.flipped : ""}`} onClick={() => { setIsOpen && setIsOpen(true) }}>
                {/* <input type="checkbox" className={styles.panel__check} /> */}
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
}
