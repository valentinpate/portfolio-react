import "./Intro.css"
import {Photo} from "../Photo/Photo"
import { useTheme } from "../ThemeProvider"

const Intro = () => {
const {modoOscuro, setModoOscuro} = useTheme()
    return(
        <>
        {modoOscuro===false && <div className="IntroContainer" id="intro">
            <Photo />
            <div className="IntroInformation">
                <h1>Valentín Pate</h1>
                <h3>Transformando ideas en soluciones funcionales y elegantes. <br />¡Colaboremos!</h3>
                <button>Descargar mi CV</button>
            </div>
        </div>}
        {modoOscuro===true && <div className="IntroContainerDark">
            <Photo />
            <div className="IntroInformation">
                <h1>Valentín Pate</h1>
                <h3>Transformando ideas en soluciones funcionales y elegantes. <br />¡Colaboremos!</h3>
                <button>Descargar mi CV</button>
            </div>
        </div>}
        </>
    )
}

export {Intro}