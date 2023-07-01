import "./Header.css"
import {Logo} from "../Logo/Logo"
import {LogoDark} from "../Logo/LogoDark"
import {Navbar} from "../Navbar/Navbar"

function Header(){
    return(
        <>
        <header className="LightHeader">
            <Logo />
            <Navbar />
        </header>
        <header className="DarkHeader">
            <LogoDark />
            <Navbar />
        </header>
        </>
    )
}

export { Header }