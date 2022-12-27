import ComponentGroup from "../ComponentGroup"
import Navbar from "../../../components/Navbar"
import Panel from "../../../components/Panel"
import MusicCard from "../../Home/MusicCard"

export default function TochiTests() {
    return (
        <>
            <ComponentGroup author="Tochi" componentName="Panel">
                {(["Full Discography", "JOHN WAV", "TOCHI BEDFORD"]).map((item, index, array) => {
                    return (
                        <Panel key={index} text={item} flipped={!(index % 2 === 0)} last={index === array.length - 1} noInfo={item === "Full Discography"} />
                    )
                })}
            </ComponentGroup>

            <ComponentGroup author="Tochi" componentName="Music Card">
                <MusicCard />
            </ComponentGroup>
        </>
    )
}