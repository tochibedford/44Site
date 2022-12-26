import styles from "./NavButton.module.scss";
import { Link } from "react-router-dom";

export default function NavButton(props: {
  text: string;
  to: string;
  type: "email" | "link";
}) {
  if (props.type === "link") {
    return (
      <Link to={props.to} className={styles.Button}>
        {props.text}
      </Link>
    );
  } else if (props.type === "email") {
    return (
      <a className={styles.Button} href="reach44db@gmail.com?body=Hey 44">
        {props.text}
      </a>
    );
  }
}
