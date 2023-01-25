import { useContext } from "react"
import DropDown from "../../components/DropDown"
import DataContext, { workSchema } from "../../context/data"
import styles from "./Discography.module.scss"

export default function Discography() {
    const data = useContext(DataContext)
    let work = data?.work
    work = work?.reduce((acc: workSchema[], curr: workSchema) => {
        return [curr].concat(acc)
    }, [])
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.page__info}>
                    <h1 className={styles.title}>DISCOGRAPHY</h1>
                    <h2 className={styles.subtitle}>A Selection of Accomplished Releases</h2>
                </div>
            </section>
            <DropDown />
            <section className={styles.panels__container}>
                {/* <Panel text="Full Discography" noInfo={true} action="link" url="/discography" />
                {talent?.map((item, index: number, array: talentSchema[]) => {
                    return (
                        <Panel key={item._id} text={item.name} shortBio={item.shortBio} flipped={(index % 2 === 0)} last={index === array.length - 1} action="button" photo={urlFor(item.profileImage.asset._ref).width(500).url()} />
                    )
                })} */}
            </section>
            {/* <DiscographyPanel isOpen={isDiscographyOpen} setIsOpen={setIsDiscographyOpen} /> */}
        </>
    )
}