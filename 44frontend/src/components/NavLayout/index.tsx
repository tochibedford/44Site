import Navbar from "../Navbar";
import styles from "./NavLayout.module.scss";
import { Outlet } from "react-router-dom";

export default function NavLayout() {
    return (
        <div className={styles.layout__container}>
            <Navbar />
            <main className={styles.main__container}>
                <Outlet />
            </main>
        </div>
    )
}