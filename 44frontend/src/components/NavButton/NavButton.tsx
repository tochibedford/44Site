import styles from "./NavButton.module.scss";
import { Link } from "react-router-dom";


export default function NavButton(props: {
  text: string;
  to?: string;
  type: "email" | "link";
}) {
  if (props.type === "email") {
    return (
      <a href="mailto:reach44db@gmail.com?body=Hey 44" className={styles.Button}>
        {props.text}
      </a>
    );

  }
  return (
    <Link to={props.to as string} className={styles.Button}>
      {props.text}
    </Link>
  );
}
