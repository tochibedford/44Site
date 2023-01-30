import Logo from "../Navbar/icons/Logo"
import styles from "./Footer.module.scss"
import linkedin from "../../assets/linkedin-logo.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.footerWrapper}>
                <div className={styles.newsletterWrapper}>
                    <h1 className={styles.title}>NEWSLETTER</h1>
                    <p className={styles.subtitle}>Receive offers, updates, tips and exclusive invites.</p>
                    <form className={styles.newsletterForm}>
                        <div>
                            <input className={styles.input} placeholder="First name"></input>
                            <input className={styles.input} placeholder="Last name"></input>
                        </div>
                        <div className={styles.line__two}>
                            <input className={styles.inputTwo} placeholder="Email Address"></input>
                            <button className={styles.buttonWrapper}>SUBSCRIBE</button>
                        </div>
                    </form>
                    <div className={styles.bottomDesktop}>
                        <h1>©️ 44DB COLLECTIVE 2023</h1>
                        <div className={styles.logo}>
                            <Logo></Logo>
                        </div>
                    </div>
                </div>
                <div className={styles.socialLinksWrapper}>
                    <div>

                    </div>
                    <ul className={styles.socialLinks}>
                        <a href="https://www.instagram.com/44db.collective/">INSTAGRAM
                            <img src={instagram}></img>
                        </a>
                        <a href="https://twitter.com/44db_collective">TWITTER
                            <img src={twitter}></img>
                        </a>
                        <a href="https://www.linkedin.com/company/44db/">LINKEDIN
                            <img src={linkedin}></img>
                        </a>
                    </ul>
                </div>
                <div className={styles.bottomMobile}>
                    <h1>©️ 44DB COLLECTIVE 2023</h1>
                    <div className={styles.logo}>
                        <Logo></Logo>
                    </div>
                </div>
            </div>
        </div>
    )
}