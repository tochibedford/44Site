import styles from "./Discography.module.scss";
import DropDown from "../../components/DropDown";
import Panel from "../../components/Panel";
import { useContext } from "react";
import DataContext, { workSchema, urlFor } from "../../context/data";

export default function Discography() {
  const data = useContext(DataContext);
  console.log(data);
  let work = data?.work;
  work = work?.reduce((acc: workSchema[], curr: workSchema) => {
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
        {work?.map((item, index: number, array: workSchema[]) => {
          return (
            <Panel
              key={item._id}
              text={item.title}
              noInfo={true} url="/"
              subtitle={item.features}
              isExternalLink = {true}
              flipped={true}
              last={index === array.length - 1}
              action="link"
            />
          );
        })}
      </section>
    </>
  );
}
