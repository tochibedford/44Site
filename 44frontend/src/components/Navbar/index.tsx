import styles from "./Navbar.module.scss"
import NavButton from "../NavButton/NavButton"
import Logo from "./icons/Logo"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const dateTimeNow = new Date()

    const [currentTime, setCurrentTime] = useState(dateTimeNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLocaleUpperCase())
    const [currentDay, setCurrentDay] = useState(
        dateTimeNow.toLocaleDateString([], {
            day: "numeric",
            month: "short"
        }).toLocaleUpperCase()
    )
    useEffect(() => {
        // moved current day here since current day can change
        const timer = setInterval(() => {
            const cTime = new Date();
            setCurrentDay(
                cTime.toLocaleDateString([], {
                    day: "numeric",
                    month: "short"
                }).toLocaleUpperCase()
            )
            setCurrentTime(`${cTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLocaleUpperCase()}`)
        }, 1000)
        return () => clearInterval(timer);
    }, [currentTime, currentDay])

    return (
        <div className={styles.navbarWrapper}>
            <Link to="/" className={styles.logo}>
                <Logo></Logo>
            </Link>
            <h1 className={styles.navbarText}> {currentDay} | {currentTime}</h1>
            <div className={styles.navbarButtons}>
                <NavButton type="email" text="Contact" />
                <NavButton type="link" to="/feed" text="Feed" />
            </div>
        </div>
    )
}