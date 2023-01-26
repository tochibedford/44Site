import { useContext } from "react"
import DropDown from "../../components/DropDown"
import Panel from "../../components/Panel"
import DataContext, { dspSchema, urlFor, workSchema } from "../../context/data"
import styles from "./Discography.module.scss"

export default function Discography() {
    const data = useContext(DataContext)
    let work = data?.work
    let dsps = data?.dsp
    work = work?.reduce((acc: workSchema[], curr: workSchema) => {
        return [curr].concat(acc)
    }, [])
    dsps = dsps?.reduce((acc: dspSchema[], curr: dspSchema) => {
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
                {work?.map((item, index: number, array: workSchema[]) => {
                    const features = item.features !== undefined ? "feat: " + (new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })).format(item.features) : ""
                    const url = item.links[0].dspLink
                    return (
                        <Panel key={item._id} text={item.title} subtitle={features} last={index === array.length - 1} action="link" url={url} icon={urlFor(item.cover.asset._ref).width(500).url()} isExternalLink={true} noInfo={true} />
                    )
                })}
            </section>
        </>
    )
}