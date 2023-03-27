import Logo from "../Navbar/icons/Logo"
import styles from "./Footer.module.scss"
import linkedin from "../../assets/linkedin-logo.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"

export default function Footer() {
    const handleSubmit = () => {

    }
    return (
        <div className={styles.container}>
            <div className={styles.footerWrapper}>
                <div className={styles.newsletterWrapper}>
                    <h1 className={styles.title}>NEWSLETTER</h1>
                    <p className={styles.subtitle}>Receive offers, updates, tips and exclusive invites.</p>
                    <form className={styles.newsletterForm}>
                        <div>
                            <input name="firstName" className={styles.input} type="text" placeholder="First name" required></input>
                            <input name="lastName" className={styles.input} type="text" placeholder="Last name" required></input>
                        </div>
                        <div className={styles.line__two}>
                            <input name="email" className={styles.inputTwo} type="email" placeholder="Email Address" required></input>
                            <button className={styles.buttonWrapper} type="submit">SUBSCRIBE</button>
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
                        <li>
                            <a target="_blank" href="https://www.instagram.com/44db.collective/">INSTAGRAM
                                <img src={instagram}></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://twitter.com/44db_collective">TWITTER
                                <img src={twitter}></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/company/44db/">LINKEDIN
                                <img src={linkedin}></img>
                            </a>
                        </li>
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