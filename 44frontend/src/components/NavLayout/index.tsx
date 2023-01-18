import { ReactNode } from "react";
import Navbar from "../Navbar";

type INavLayout = {
    children: ReactNode
}

export default function NavLayout({ children }: INavLayout) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}