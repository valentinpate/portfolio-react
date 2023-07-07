import "./Header.css"
import {Logo} from "../Logo/Logo"
import {LogoDark} from "../Logo/LogoDark"
import {Navbar} from "../Navbar/Navbar"
import { useTheme } from "../ThemeProvider"

const Header = () => {
 const {modoOscuro, setModoOscuro} = useTheme()

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