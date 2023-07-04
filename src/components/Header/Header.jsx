import React, { useState } from "react";
import "./Header.css"
import { LightButton } from "../LightButton/LightButton";
import {Logo} from "../Logo/Logo"
import {LogoDark} from "../Logo/LogoDark"
import {Navbar} from "../Navbar/Navbar"

function Header(){
    const [modoOscuro, setModoOscuro] = useState(false)

    function oscuro(){
        setModoOscuro(!modoOscuro)
    }

    return(
        <>
        {modoOscuro===false &&<header className="LightHeader">
            <Logo />
            <Navbar />
        </header>}
        {modoOscuro===true &&<header className="DarkHeader">
            <LogoDark />
            <Navbar />
        </header>}
        </>
    )
}

export { Header }