import styles from "./Panel.module.scss"
import arrow from "./images/arrow_blue.svg"
import { Link } from "react-router-dom"
import { MouseEvent, useEffect, useRef } from "react"

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
    photo?: never
    setIsOpen?: never
    isDiscography?: boolean
} | {
    action: "button"
    url?: never
    icon?: never
    subtitle?: never
    isExternalLink?: never
    photo?: string
    isDiscography?: never
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

type IPanel = IPanelBase & IPanelConditional

export default function Panel({ text, last = false, subtitle, isExternalLink = false, shortBio, photo, flipped = false, noInfo = false, icon = arrow, action = "link", url, setIsOpen, isDiscography }: IPanel) {
    const panelRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleResize = (e: Event) => {
            if (window.innerWidth < parseInt(styles.tabletScreenSize)) {
                const panel = panelRef.current?.querySelector(`.${styles.image__container}`) as HTMLDivElement
                if (panel) {
                    if (flipped) {
                        panel.style.right = "0px"
                        panel.style.left = ""
                    } else {
                        panel.style.left = "0px"
                        panel.style.right = ""
                    }
                }
            }
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const panel = (e.currentTarget as HTMLDivElement).querySelector(`.${styles.image__container}`) as HTMLDivElement
        if (window.innerWidth >= parseInt(styles.tabletScreenSize)) {
            if (panel) {
                const text__content = e.currentTarget?.querySelector(`.${styles.text__content}`) as HTMLDivElement
                if (flipped) {
                    panel.style.right = (`${Math.min(text__content.getBoundingClientRect().width - 300, Math.max(-100, text__content.getBoundingClientRect().width - (e.clientX - text__content.getBoundingClientRect().x) - 200))}px`)
                } else {
                    panel.style.left = (`${Math.min(text__content.getBoundingClientRect().width - 100, Math.max(100, e.clientX - text__content.getBoundingClientRect().x))}px`)
                }
            }
        }
    }
    if (action === "link" && url) { // panel acts as a link
        if (isExternalLink) { // panel acts as an external link
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
                                {shortBio}
                            </div>) :
                            (<div className={`${styles.arrow__container} ${icon ? styles.custom__icon : ""} ${isDiscography ? styles.cover : ""}`}>
                                <img src={icon} alt="arrow icon" className={(flipped && !icon) ? styles.image__flipped : ""} />
                            </div>)
                        }

                    </div>
                </a>
            )
        }
        return ( //panel acts as an internal link
            <Link to={url} className={`${styles.container} ${last ? styles.last__panel : ""} ${flipped ? styles.flipped : ""}`}>
                <div className={`${styles.text__content} ${subtitle ? styles.small : ""}`}>
                    <div className={styles.title}>{text}</div>
                    <div className={styles.subtitle}>{subtitle}</div>
                </div>
                <div className={styles.divider} />
                <div className={styles.panel__action__detail}>
                    {!noInfo ? (
                        <div className={styles.panel__detail__container}>
                            {shortBio}
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
            <div ref={panelRef} onMouseMove={handleMouseMove} className={`${styles.container} ${last ? styles.last__panel : ""} ${flipped ? styles.flipped : ""}`} onClick={() => { setIsOpen && setIsOpen(true) }}>
                <div className={styles.text__content}>
                    {text}
                    <div className={`${styles.image__container} ${flipped ? styles.flipped : ""}`}>
                        <img src={photo} />
                    </div>
                </div>
                <div className={styles.divider} />
                <div className={styles.panel__action__detail}>
                    {!noInfo ? (
                        <div className={styles.panel__detail__container}>
                            {shortBio}
                        </div>) :
                        (<div className={styles.arrow__container}>
                            <img src={arrow} alt="arrow icon" className={flipped ? styles.flipped : ""} />
                        </div>)
                    }
                </div>

            </div>
        )

    }
}
