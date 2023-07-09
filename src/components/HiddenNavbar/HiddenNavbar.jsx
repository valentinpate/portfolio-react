import "./HiddenNavbar.css"
import { useTheme } from "../ThemeProvider";
import { HiddenLightButton } from "../HiddenLightButton/HiddenLightButton";

const HiddenNavbar = () => {
    let {modoOscuro, setModoOscuro, menu, setMenu} = useTheme()
    const Hamburguesa = () => {
       setMenu(!menu)
    }
    return(
        <>
        {modoOscuro===false && <nav className="HiddenNavbar">
            <button className="CloseBurger" onClick={Hamburguesa}><i class="bi bi-x-lg"></i></button>
            <a href="">Sobre Mí</a>
            <a href="">Experiencia</a>
            <a href="">Proyectos</a>
            <a href="">Contacto</a>
            <div className="HiddenLightButton">
                <HiddenLightButton />
            </div>
        </nav>}
        {modoOscuro===true && <nav className="DarkHiddenNavbar">
            <button className="CloseBurger" onClick={Hamburguesa}><i class="bi bi-x-lg"></i></button>
            <a href="">Sobre Mí</a>
            <a href="">Experiencia</a>
            <a href="">Proyectos</a>
            <a href="">Contacto</a>
            <div className="HiddenLightButton">
                <HiddenLightButton />
            </div>
        </nav>}
        </>
    )
}

export {HiddenNavbar}