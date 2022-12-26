// use this file to check your components out
import Navbar from "../../components/Navbar"
import styles from "./TestPage.module.scss"

export default function TestPage() {
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.body}>
                <h1>
                    This is the test Route, Place components here to check them out visually : )
                </h1>

                <div className={styles.componentGroup}>
                    <h2 className={styles.groupName}>
                        Navbar - <i>Tochi</i>
                    </h2>
                    <Navbar />
                </div>
            </div>
        </div>
    )
}