import { ReactNode } from "react";
import Navbar from "../Navbar";

type ILayout = {
    children: ReactNode
}

export default function Layout({ children }: ILayout) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}