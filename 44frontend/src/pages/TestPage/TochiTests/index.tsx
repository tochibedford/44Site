import ComponentGroup from "../ComponentGroup"
import Navbar from "../../../components/Navbar"
import Panel from "../../../components/Panel"
import MusicCard from "../../Home/MusicCard"

export default function TochiTests() {
    return (
        <>
            <ComponentGroup author="Tochi" componentName="Navbar">
                <Navbar />
            </ComponentGroup>

            <ComponentGroup author="Tochi" componentName="Panel">
                <Panel />
            </ComponentGroup>

            <ComponentGroup author="Tochi" componentName="Music Card">
                <MusicCard />
            </ComponentGroup>
        </>
    )
}