import styles from "./DropDown.module.scss";
import uuid from "react-uuid";
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import DataContext, { talentSchema } from "../../context/data";

export default function DropDown({ selected, setSelected }: { selected: string, setSelected: React.Dispatch<React.SetStateAction<string>> }) {
    const data = useContext(DataContext);
    let talent = data?.talent
    talent = talent?.reduce((acc: talentSchema[], curr: talentSchema) => {
        return [curr].concat(acc)
    }, [])
    const dropdownItems = talent?.map(item => item.name);
    const [isToggled, setIsToggled] = useState(false)

    const handleChange = (e: FormEvent) => {
        setSelected((e.target as HTMLInputElement).value)
    }

    const handleChangeInner = (e: FormEvent) => {
        // (e.target as HTMLInputElement).checked === 
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
                    {dropdownItems?.map(item => {
                        return (
                            <div className={styles.option} key={uuid()}>
                                <input type="radio" name="selected" value={item} checked={selected === item ? true : false} readOnly />
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