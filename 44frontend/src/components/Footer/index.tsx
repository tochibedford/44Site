import Logo from "../Navbar/icons/Logo";
import styles from "./Footer.module.scss";
import linkedin from "../../assets/linkedin-logo.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";

const Loader = () => {
  return (
    <svg
      className={styles.spinner}
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231 0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475 2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464 1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
        stroke="white"
      />
    </svg>
  );
};

export default function Footer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [text, setText] = useState("SUBSCRIBE");

  const [submit, submitting] = useFormspark({
    formId: import.meta.env.VITE_FORM_ID,
  });


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    await submit({
      firstName,
      lastName,
      email,
    }).then(() => setLoader(false));
    setEmail("");
    setLastName("");
    setFirstName("");
    setText("RECEIVED");
  };

  return (
    <div className={styles.container}>
      <div className={styles.footerWrapper}>
        <div className={styles.newsletterWrapper}>
          <h1 className={styles.title}>NEWSLETTER</h1>
          <p className={styles.subtitle}>
            Receive offers, updates, tips and exclusive invites.
          </p>
          <form className={styles.newsletterForm} onSubmit={handleSubmit}>
            <div>
              <input
                value={firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFirstName(e.target.value)
                }
                className={styles.input}
                placeholder="First name"
                type="firstname"
                id="firstName"
                required
              ></input>
              <input
                value={lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
                className={styles.input}
                placeholder="Last name"
                type="lastname"
                id="lastName"
              ></input>
            </div>
            <div className={styles.line__two}>
              <input
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className={styles.inputTwo}
                placeholder="Email Address"
                type="email"
                required
                id="email"
              ></input>
              <button
                className={styles.buttonWrapper}
                type="submit"
                disabled={loader}
              >
                {!loader ? text : <Loader />}
              </button>
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
          <div></div>
          <ul className={styles.socialLinks}>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/44db.collective/"
              >
                INSTAGRAM
                <img src={instagram}></img>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/44db_collective">
                TWITTER
                <img src={twitter}></img>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/company/44db/">
                LINKEDIN
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
  );
}
