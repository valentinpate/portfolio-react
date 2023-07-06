import React, { useState } from "react";
import "./Header.css"
// import {useTheme} from "../ThemeProvider"
import {Logo} from "../Logo/Logo"
import {LogoDark} from "../Logo/LogoDark"
import {Navbar} from "../Navbar/Navbar"

function Header(){

    // const headerOscuro = useContext(oscuroContexto)
    const [modoOscuro, setModoOscuro] = useState(false)

    function oscuro(){
        setModoOscuro(!modoOscuro)
    }
    return(
        <>
        {modoOscuro===false &&<header className="LightHeader" onClick={oscuro}>
            <Logo />
            <Navbar />
        </header>}
        {modoOscuro===true &&<header className="DarkHeader" onClick={oscuro}>
            <LogoDark />
            <Navbar />
        </header>}
        </>
    )
}

export { Header }