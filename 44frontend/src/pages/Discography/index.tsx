import { useContext, useEffect, useState } from "react"
import DropDown from "../../components/DropDown"
import Panel from "../../components/Panel"
import DataContext, { dspSchema, talentSchema, urlFor, workSchema } from "../../context/data"
import styles from "./Discography.module.scss"

export default function Discography() {
    const [selectedName, setSelectedName] = useState("Tochi Bedford")
    const data = useContext(DataContext)
    let talent = data?.talent
    let work = data?.work
    let dsps = data?.dsp
    talent = talent?.reduce((acc: talentSchema[], curr: talentSchema) => {
        return [curr].concat(acc)
    }, [])
    work = work?.reduce((acc: workSchema[], curr: workSchema) => {
        return [curr].concat(acc)
    }, [])
    dsps = dsps?.reduce((acc: dspSchema[], curr: dspSchema) => {
        return [curr].concat(acc)
    }, [])
    let workElements: (JSX.Element | undefined)[] | undefined;
    const filteredTalentByName = talent?.filter(item => {
        return item.name === selectedName
    })[0]
    let filteredWorkByTalentId: workSchema[] | undefined = []
    if (filteredTalentByName) {
        filteredWorkByTalentId = work?.filter(item => {
            const contributorIdList = item.contributor.map(contrib => {
                return contrib._ref
            })

            return contributorIdList.includes(filteredTalentByName?._id)
        })
    }
    workElements = filteredWorkByTalentId?.map((item, index: number, array: workSchema[]) => {
        const features = item.features !== undefined ? " feat: " + (new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })).format(item.features) : ""
        const url = item.links[0].dspLink

        return (
            <Panel key={item._id} text={item.title} subtitle={item.artistName + features} last={index === array.length - 1} action="link" url={url} icon={urlFor(item.cover.asset._ref).width(500).url()} isExternalLink={true} noInfo={true} isDiscography={true} />
        )
    })
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.page__info}>
                    <h1 className={styles.title}>DISCOGRAPHY</h1>
                    <h2 className={styles.subtitle}>A Selection of Accomplished Releases</h2>
                </div>
            </section>
            <DropDown selected={selectedName} setSelected={setSelectedName} />
            <section className={styles.panels__container}>
                {workElements}
            </section>
        </>
    )
}