import "./Logo.css"
import LogoImg from "./Logo.png"
import LogoDarkImg from "./LogoDark.png"

const Logo = () => {
    return (
        <>
            <img src={LogoImg} className="LightMode" alt="Logo de Valentín Pate" />
        </>
    )
}

export { Logo }