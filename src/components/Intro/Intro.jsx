import React, {useState} from "react";
import "./Intro.css"
import {Photo} from "../Photo/Photo"

function Intro(){
        const [modoOscuro, setModoOscuro] = useState(false)

    function oscuro(){
        setModoOscuro(!modoOscuro)
    }
    return(
        <>
        {modoOscuro === false && <div className="IntroContainer" onClick={oscuro}>
            <Photo />
            <div className="IntroInformation">
                <h1>Valentín Pate</h1>
                <h3>Transformando ideas en soluciones funcionales y elegantes. <br />¡Colaboremos!</h3>
                <button>Descargar mi CV</button>
            </div>
        </div>}
        {modoOscuro === true && <div className="IntroContainer IntroContainerDark" onClick={oscuro}>
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