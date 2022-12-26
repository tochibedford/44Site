// use this file to check your components out
import NavButton from "../../components/NavButton/NavButton"
import Navbar from "../../components/Navbar"
import Panel from "../../components/Panel"
import styles from "./TestPage.module.scss"
import JohnTests from "./JohnTests"
import TochiTest from "./TochiTests"

export default function TestPage() {
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.body}>
                <h1>
                    This is the test Route, Place components here to check them out visually : )
                </h1>
                {/* Juts wrap your component in this "ComponentGroup Component to separate it into it's own box" */}
                <TochiTest />
                <JohnTests />
            </div>
        </div>
    )
}