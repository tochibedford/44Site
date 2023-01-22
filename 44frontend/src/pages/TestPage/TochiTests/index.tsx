import ComponentGroup from "../ComponentGroup"
import Panel from "../../../components/Panel"
import MusicCard from "../../Home/MusicCard"
import DiscographyPanel from "../../Home/DiscographyPanel"
import { useState } from "react"
import CardCarousel from "../../Home/CardCarousel"
import mbLogo from "../../../assets/mbLogo.png"
import client from "../../../client"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
    return builder.image(source)
}


export default function TochiTests() {
    const [isDiscographyOpen, setIsDiscographyOpen] = useState(false)
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

            <ComponentGroup author="Tochi" componentName="Feed Panel">
                <Panel icon={mbLogo} text={"More Branches"} last={true} isExternalLink={true} subtitle="The 44dbcollective Want You To Know The Revolution Will Be Televised" noInfo={true} action="link" url="https://www.morebranches.com/the-44dbcollective-want-you-to-know-the-revolution-will-be-televised/" />
            </ComponentGroup>

            <ComponentGroup author="Tochi" componentName="Card Carousel">
                <CardCarousel />
            </ComponentGroup>

            <ComponentGroup author="Tochi" componentName="Sanity Calls tests">
                <img src={urlFor("image-72e43636fa2f561015d62339b62f60b9036d26a4-1641x2500-jpg").width(500).url()} />
            </ComponentGroup>
        </>
    )
}