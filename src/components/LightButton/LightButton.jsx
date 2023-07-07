import React, { useState } from "react";
import "./LightButton.css"

function LightButton(){

    let cuerpo = document.getElementById("body")
    let cabezado = document.getElementById("header")
    const [bodyColor,setBodyColor] = useState(false)
    const [headerColor, setHeaderColor] = useState(false)
    const [modoOscuro, setModoOscuro] = useState(false)

    function oscuro(){
        setModoOscuro(!modoOscuro)
        setBodyColor(!bodyColor)
        setHeaderColor(!headerColor)
        if(!bodyColor === true){
            cuerpo.style.backgroundColor = "rgb(28,32,37)"
        }else{
            cuerpo.style.backgroundColor = "rgb(242,242,242)"
        }
    }

    return(
        <div className="CheckboxContainer" id="ButtonContainer">
            <div className="form-check form-switch Light-Mode">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                {modoOscuro === false && <label className="form-check-label" for="flexSwitchCheckDefault">Modo oscuro</label>}
                {modoOscuro === true && <div className="Dark-Mode">
                    <label className="form-check-label" for="flexSwitchCheckDefault"><p className="Dark-Mode">Modo oscuro</p></label>
                    </div>}
            </div>
        </div>
    )
}

export {LightButton}