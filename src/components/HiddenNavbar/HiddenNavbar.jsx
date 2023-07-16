import "./HiddenNavbar.css"
import { useTheme } from "../ThemeProvider";
import { HiddenLightButton } from "../HiddenLightButton/HiddenLightButton";

const HiddenNavbar = () => {
    const {modoOscuro, setModoOscuro, menu, setMenu} = useTheme()
    const Hamburguesa = () => {
       setMenu(!menu)
    }
    return(
        <>
        {modoOscuro===false && <nav className="HiddenNavbar">
            <button className="CloseBurger" onClick={Hamburguesa}><i class="bi bi-x-lg"></i></button>
            <a href="#AboutMe">Sobre Mí</a>
            <a href="#Experience">Experiencia</a>
            <a href="#Projects">Proyectos</a>
            <a href="#Contact">Contacto</a>
            <div className="HiddenLightButton">
                <HiddenLightButton />
            </div>
        </nav>}
        {modoOscuro===true && <nav className="DarkHiddenNavbar">
            <button className="CloseBurger" onClick={Hamburguesa}><i class="bi bi-x-lg"></i></button>
            <a href="#AboutMeDark">Sobre Mí</a>
            <a href="#ExperienceDark">Experiencia</a>
            <a href="#ProjectsDark">Proyectos</a>
            <a href="#ContactDark">Contacto</a>
            <div className="HiddenLightButton">
                <HiddenLightButton />
            </div>
        </nav>}
        </>
    )
}

export {HiddenNavbar}