import styles from "./Panel.module.scss"
import arrow from "./images/arrow_blue.svg"
import { Link } from "react-router-dom"

interface IPanelBase {
    text: string
    last?: boolean
    flipped?: boolean
    noInfo?: boolean
    shortBio?: string
}

type IPanelConditional = {
    action: "link"
    url: string
    icon?: string
    subtitle?: string
    isExternalLink?: boolean
    setIsOpen?: never
} | {
    action: "button"
    url?: never
    icon?: never
    subtitle?: never
    isExternalLink?: never
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type IPanel = IPanelBase & IPanelConditional

export default function Panel({ text, last = false, subtitle, isExternalLink = false, shortBio, flipped = false, noInfo = false, icon = arrow, action = "link", url, setIsOpen }: IPanel) {
    if (action === "link" && url) { // panel acts as a link
        if (isExternalLink) {
            return (
                <a href={url} target="_blank" className={`${styles.container} ${last ? styles.last__panel : ""} ${flipped ? styles.flipped : ""}`}>
                    <div className={`${styles.text__content} ${subtitle ? styles.small : ""}`}>
                        <div className={styles.title}>{text}</div>
                        <div className={styles.subtitle}>{subtitle}</div>
                    </div>
                    <div className={styles.divider} />
                    <div className={styles.panel__action__detail}>
                        {!noInfo ? (
                            <div className={styles.panel__detail__container}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ad ex deleniti ratione a nam tempore dolorem tempora rem voluptatum!
                            </div>) :
                            (<div className={`${styles.arrow__container} ${icon ? styles.custom__icon : ""}`}>
                                <img src={icon} alt="arrow icon" className={(flipped && !icon) ? styles.image__flipped : ""} />
                            </div>)
                        }

                    </div>
                </a>
            )
        }
        return (
            <Link to={url} className={`${styles.container} ${last ? styles.last__panel : ""} ${flipped ? styles.flipped : ""}`}>
                <div className={`${styles.text__content} ${subtitle ? styles.small : ""}`}>
                    <div className={styles.title}>{text}</div>
                    <div className={styles.subtitle}>{subtitle}</div>
                </div>
                {/* <div className={`${styles.text__content}`}>{text}</div> */}
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
                <div className={styles.text__content}>{text}</div>
                <div className={styles.divider} />
                <div className={styles.panel__action__detail}>
                    {!noInfo ? (
                        <div className={styles.panel__detail__container}>
                            {shortBio}
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
