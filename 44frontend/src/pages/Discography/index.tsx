import styles from "./Discography.module.scss";
import DropDown from "../../components/DropDown";
import Panel from "../../components/Panel";
import { useContext } from "react";
import DataContext, { talentSchema, urlFor } from "../../context/data";

export default function Discography() {
  const data = useContext(DataContext);
  console.log(data)
  let talent = data?.talent;
  talent = talent?.reduce((acc: talentSchema[], curr: talentSchema) => {
    return [curr].concat(acc);
  }, []);

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.headlines}>
          <h1 className={styles.heading}>DISCOGRAPHY</h1>
          <h2 className={styles.subheading}>
            A Selection of Accomplished Releases
          </h2>
          <div className={styles.selector}>
            <DropDown />
          </div>
        </div>
      </section>

      <section className={styles.panels__container}>
        <Panel
          text="SAINT AUSTIN: RATHER BE"
          noInfo={true}
          action="link"
          url="/discography"
          flipped={true}
        />

      </section>
    </>
  );
}
