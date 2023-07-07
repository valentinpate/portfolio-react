import "./Logo.css"
import LogoImg from "./Logo.png"
import LogoDarkImg from "./LogoDark.png"

const Logo = () => {
    return (
        <>
            <img src={LogoImg} className="LightMode" alt="Logo de Valentín Pate" />
            <img src={LogoDarkImg} className="DarkMode" alt="Logo Modo Oscuro" />
        </>
    )
}

export { Logo }