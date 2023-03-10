// use this file to check your components out
import styles from "./TestPage.module.scss"
import JohnTests from "./JohnTests"
import TochiTests from "./TochiTests"
import MartieTests from "./MartieTests"
import Navbar from "../../components/Navbar"
import { useContext, useEffect } from "react"
import DataContext from "../../context/data"
import Footer from "../../components/Footer"

export default function TestPage() {
    // testing data context
    const data = useContext(DataContext)

    return (
        <>
            <Navbar />
            <div className={styles.bodyContainer}>
                <div className={styles.body}>
                    <h1>
                        This is the test Route, Place components here to check them out visually : )
                    </h1>
                    {/* Juts wrap your component in this "ComponentGroup Component to separate it into it's own box" */}
                    <TochiTests />
                    <JohnTests />
                    <MartieTests />
                </div>
            </div>
            <Footer />
        </>
    )
}