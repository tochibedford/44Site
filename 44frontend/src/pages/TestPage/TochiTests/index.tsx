import ComponentGroup from "../ComponentGroup"
import Navbar from "../../../components/Navbar"
import Panel from "../../../components/Panel"

export default function TochiTest() {
    return (
        <>
            <ComponentGroup author="Tochi" componentName="Navbar">
                <Navbar />
            </ComponentGroup>

            <ComponentGroup author="Tochi" componentName="Panel">
                <Panel />
            </ComponentGroup>
        </>
    )
}