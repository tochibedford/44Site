import styles from "./DiscographyPanel.module.scss"
import closeIcon from "./assets/closeIcon.png"
import MusicGridItem from "./components/MusicGridItem";
import { useContext } from "react";
import DataContext, { urlFor, workSchema } from "../../../context/data";

type IDiscographyPanel = {
    selectedName?: string
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DiscographyPanel({ selectedName, isOpen, setIsOpen }: IDiscographyPanel) {
    const data = useContext(DataContext)
    let talent = data?.talent
    let work = data?.work
    let dsps = data?.dsp

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
        const features = item.features !== undefined ? (new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })).format(item.features) : ""
        const url = item.links[0].dspLink

        return (
            <MusicGridItem key={item._id} controllerClass={styles.item} title={item.title} artist={item.artistName} features={features} album_art={urlFor(item.cover.asset._ref).width(500).url()} />
        )
    })
    return (
        <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
            <div className={styles.top}>
                <img src={closeIcon} className={styles.close__icon} alt="close icon" onClick={() => { setIsOpen(false) }} />
            </div>
            <div className={styles.music__grid__container}>
                <div className={styles.inner__container}>
                    {
                        workElements
                    }


                </div>
            </div>
        </div>
    )
}