import React, { useState } from "react";
import "./Header.css"
// import {useTheme} from "../ThemeProvider"
import {Logo} from "../Logo/Logo"
import {LogoDark} from "../Logo/LogoDark"
import {Navbar} from "../Navbar/Navbar"

function Header(){
    let cuerpo = document.getElementById("body")
    const [bodyColor,setBodyColor] = useState(false)
    const [modoOscuro, setModoOscuro] = useState(false)

    function oscuro(){
        setModoOscuro(!modoOscuro)
        setBodyColor(!bodyColor)
        if(!bodyColor === true){
            cuerpo.style.backgroundColor = "rgb(28,32,37)"
        }else{
            cuerpo.style.backgroundColor = "rgb(242,242,242)"
        }
    }
    return(
        <>
        {modoOscuro===false &&<header className="LightHeader" id="header" onClick={oscuro}>
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