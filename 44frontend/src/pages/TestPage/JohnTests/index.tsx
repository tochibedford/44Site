import ComponentGroup from "../ComponentGroup"
import NavButton from "../../../components/NavButton/NavButton"
import MusicGridItem from "../../../components/MusicGridItem"

export default function JohnTests() {
    
    const MusicGridObject = {title: "Rather Be", artist: "Saint Austin", features: "Saint, John & Tochi", album_art:'https://www.shutterstock.com/image-vector/vertical-seamless-pattern-zodiac-signs-600w-416670184.jpg'} ;

    return (
        <>
            <ComponentGroup author="John" componentName="Button">
                <button>A test Button</button>
            </ComponentGroup>

            {/* another example */}


            <ComponentGroup author="John" componentName="NavButton">
                <NavButton type="email" text="Contact" />
                <NavButton type="link" to="/feed" text="Feed" />
            </ComponentGroup>
            <ComponentGroup author="John" componentName="MusicGridItem">
               <MusicGridItem  {...MusicGridObject} />
            </ComponentGroup>


        </>
    )
}