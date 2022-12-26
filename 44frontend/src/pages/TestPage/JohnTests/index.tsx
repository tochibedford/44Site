import ComponentGroup from "../ComponentGroup"
import NavButton from "../../../components/NavButton/NavButton"

export default function JohnTests() {
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
        </>
    )
}