import { useTheme } from "../ThemeProvider"
import "./Navbar.css"

const Navbar = () => {
    const {modoOscuro, setModoOscuro} = useTheme()
    return(
        <>
        {modoOscuro===false &&<nav>
            <a href="#AboutMe">Sobre Mí</a>
            <a href="#Experience">Experiencia</a>
            <a href="#Projects">Proyectos</a>
            <a href="#Contact">Contacto</a>
        </nav>}
        {modoOscuro===true &&<nav>
            <a href="#AboutMeDark">Sobre Mí</a>
            <a href="#ExperienceDark">Experiencia</a>
            <a href="#ProjectsDark">Proyectos</a>
            <a href="#ContactDark">Contacto</a>
        </nav>}
        </>
    )
}

export {Navbar}