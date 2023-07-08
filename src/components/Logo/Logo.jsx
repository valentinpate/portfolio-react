import "./Logo.css"
import LogoImg from "./Logo.png"

const Logo = () => {
    return (
        <>
            <img src={LogoImg} className="LightMode" alt="Logo de Valentín Pate" />
        </>
    )
}

export { Logo }