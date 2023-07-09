import { useState } from "react"
import "./Header.css"
import {Logo} from "../Logo/Logo"
import {LogoDark} from "../Logo/LogoDark"
import {Navbar} from "../Navbar/Navbar"
import {HiddenNavbar} from "../HiddenNavbar/HiddenNavbar"
import { useTheme } from "../ThemeProvider"

const Header = () => {
    let {modoOscuro, setModoOscuro, menu, setMenu} = useTheme()
    const Hamburguesa = () => {
        setMenu(!menu)
     }
    return(
        <>
            {modoOscuro===false &&<header className="LightHeader">
                <Logo />
                <Navbar />
                <div className="Burger">
                    <button className="BurgerButton" onClick={Hamburguesa}><i class="bi bi-list"></i></button>
                    {menu===true && <HiddenNavbar />}
                </div>
            </header>}
            {modoOscuro===true &&<header className="DarkHeader">
                <LogoDark />
                <Navbar />
                <div className="DarkBurger">
                    <button className="BurgerButton" onClick={Hamburguesa}><i class="bi bi-list"></i></button>
                    {menu===true && <HiddenNavbar />}
                </div>
            </header>}
        </>
    )
}

export { Header }