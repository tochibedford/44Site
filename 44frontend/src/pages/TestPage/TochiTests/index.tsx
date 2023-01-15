import ComponentGroup from "../ComponentGroup"
import Panel from "../../../components/Panel"
import MusicCard from "../../Home/MusicCard"
import DiscographyPanel from "../../Home/DiscographyPanel"
import { useState } from "react"

export default function TochiTests() {
    const [isDiscographyOpen, setIsDiscographyOpen] = useState(false);
    return (
        <>
            <ComponentGroup author="Tochi" componentName="Panel">
                {(["Full Discography", "JOHN WAV", "TOCHI BEDFORD"]).map((item, index, array) => {

                    if (item === "Full Discography") {
                        return (
                            <Panel key={index} text={item} flipped={!(index % 2 === 0)} last={index === array.length - 1} noInfo={item === "Full Discography"} action="link" url="/discography" />
                        )
                    } else {
                        return (
                            <Panel key={index} text={item} flipped={!(index % 2 === 0)} last={index === array.length - 1} action="button" setIsOpen={setIsDiscographyOpen} />
                        )
                    }
                })}
            </ComponentGroup>

            <ComponentGroup author="Tochi" componentName="Music Card">
                < MusicCard />
            </ComponentGroup>

            <ComponentGroup author="Tochi" componentName="Discography on click">
                <>Click the panel to bring out the discography pane</>
                <Panel text={"John Wav"} last={true} noInfo={true} action="button" setIsOpen={setIsDiscographyOpen} />
                <DiscographyPanel isOpen={isDiscographyOpen} setIsOpen={setIsDiscographyOpen} />
            </ComponentGroup>
        </>
    )
}