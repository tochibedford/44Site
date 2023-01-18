import Navbar from "../Navbar";
import styles from "./NavLayout.module.scss";

type INavLayout = {
    children: React.ReactNode
}

export default function NavLayout({ children }: INavLayout) {
    return (
        <div className={styles.layout__container}>
            <Navbar />
            <main className={styles.main__container}>{children}</main>
        </div>
    )
}