import styles from "./ComponentGroup.module.scss"

interface IComponentGroup {
    author: string,
    componentName: string,
    children: React.ReactNode
}

export default function ComponentGroup({ author, componentName, children }: IComponentGroup) {
    return (
        <div className={styles.componentGroup}>
            <h2 className={styles.groupName}>
                {componentName} - <i>{author}</i>
            </h2>
            {children}
        </div>
    )
}