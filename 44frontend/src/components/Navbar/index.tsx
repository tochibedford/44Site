import styles from "./Navbar.module.scss"
import NavButton from "../NavButton/NavButton"
import Logo from "./icons/Logo"
import { useEffect, useState } from "react";

export default function Navbar() {
    const currentDay = new Date()
        .toLocaleDateString([], {
            day: "numeric",
            month: "short"
        }).toLocaleUpperCase()

    const [currentTime, setCurrentTime] = useState("")
    useEffect(() => {
        const timer = setInterval(() => {
            const cTime = new Date();
            setCurrentTime(`${cTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLocaleUpperCase()}`)
        }, 1000)
        return () => clearInterval(timer);
    }, [currentTime])

    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.logo}>
                <Logo></Logo>
            </div>
            <h1 className={styles.navbarText}> {currentDay} | {currentTime}</h1>
            <div className={styles.navbarButtons}>
                <NavButton type="email" text="Contact" />
                <NavButton type="link" to="/feed" text="Feed" />
            </div>
        </div>
    )
}