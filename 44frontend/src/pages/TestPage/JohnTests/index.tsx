import ComponentGroup from "../ComponentGroup"
import NavButton from "../../../components/NavButton/NavButton"
import MusicGridItem from "../../../components/MusicGridItem"

export default function JohnTests() {

    const MusicGridObject = {
        title: "Rather Be",
        artist: "Saint Austin",
        features: "Saint, John & Tochi",
        album_art: 'https://images.unsplash.com/photo-1543459176-4426b37223ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    };

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