// use this file to check your components out
import NavButton from "../../components/NavButton/NavButton"
import Navbar from "../../components/Navbar"
import styles from "./TestPage.module.scss"

interface IComponentGroup {
    author: string,
    componentName: string,
    children: React.ReactNode
}

function ComponentGroup({ author, componentName, children }: IComponentGroup) {
    return (
        <div className={styles.componentGroup}>
            <h2 className={styles.groupName}>
                {componentName} - <i>{author}</i>
            </h2>
            {children}
        </div>
    )
}

export default function TestPage() {
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.body}>
                <h1>
                    This is the test Route, Place components here to check them out visually : )
                </h1>
                {/* Juts wrap your component in this "ComponentGroup Component to separate it into it's own box" */}
                <ComponentGroup author="Tochi" componentName="Navbar">
                    <Navbar />
                </ComponentGroup>

                {/* another example */}
                <ComponentGroup author="John" componentName="Button">
                    <button>A test Button</button>
                </ComponentGroup>

                <ComponentGroup author="John" componentName="NavButton">
                    <NavButton type="email" to="/reach44db@gmail.com" text="Contact"/>
                    <NavButton type="link" to="/feed" text="Feed"/>
                </ComponentGroup>
            </div>
        </div>
    )
}