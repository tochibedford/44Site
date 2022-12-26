import styles from "./NavButton.module.scss";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, children }: { mailto: string, children: React.ReactNode }) => {
  return (
    <Link
      to='#'
      onClick={(e) => {
        window.location.href = "mailto:" + mailto;
        e.preventDefault();
      }}

    >
      {children}
    </Link>
  );
};

export default function NavButton(props: {
  text: string;
  to?: string;
  type: "email" | "link";
}) {
  if (props.type === "email") {
    return (
      <a href="mailto:reach44db@gmail.com?body=Hey 44">
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
