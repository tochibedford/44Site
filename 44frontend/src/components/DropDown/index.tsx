import styles from "./DropDown.module.scss";
import uuid from "react-uuid";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function DropDown() {
    const dropdownItems = ["Curated", "John Wav", "Tochi Bedford", "Johnson IP", "Trill Xoe", "KD", "Malik Bawa"];
    const [selected, setSelected] = useState(dropdownItems[0])
    const [isToggled, setIsToggled] = useState(false)

    const handleChange = (e: FormEvent) => {
        setSelected((e.target as HTMLInputElement).value)
    }

    const handleToggle = (e: ChangeEvent) => {
        setIsToggled(prevState => !prevState)
        e.stopPropagation()
    }

    useEffect(() => {
        const clickEvent = () => {
            setIsToggled(false)
        }
        document.addEventListener('click', clickEvent)
        return () => {
            document.removeEventListener('click', clickEvent)
        }

    }, [])

    return (
        <div className={styles.container}>
            <input type="checkbox" checked={isToggled} onChange={handleToggle} />
            <div className={styles.optionsContainer} onChange={handleChange}>
                <div className={styles.optionsContainerContent}>
                    {dropdownItems.map(item => {
                        return (
                            <div className={styles.option} key={uuid()}>
                                <input type="radio" name="selected" value={item} checked={selected === item ? true : false} />
                                {item}
                            </div>
                        )
                    })}
                    <div className={styles.option} onClick={(e) => { e.stopPropagation() }}>
                        <div className={styles.arrowContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.selected}>
                {selected}
            </div>
            <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    )
}