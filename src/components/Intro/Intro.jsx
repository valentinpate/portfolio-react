import "./Intro.css"
import {Photo} from "../Photo/Photo"

function Intro(){
    return(
        <div className="IntroContainer">
            <Photo />
            <div className="IntroInformation">
                <h1>Valentín Pate</h1>
                <h3>Transformando ideas en soluciones funcionales y elegantes. <br />¡Colaboremos!</h3>
                <button>Descargar mi CV</button>
            </div>
        </div>
    )
}

export {Intro}