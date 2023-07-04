import React, { useState } from "react";
import "./LightButton.css"

function LightButton(){

    const [modoOscuro, setModoOscuro] = useState(false)

    function oscuro(){
        setModoOscuro(!modoOscuro)
    }

    return(
        <div className="CheckboxContainer" id="ButtonContainer">
            <div className="form-check form-switch Light-Mode">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={oscuro}></input>
                {modoOscuro === false && <label className="form-check-label" for="flexSwitchCheckDefault">Modo oscuro</label>}
                {modoOscuro === true && <label className="form-check-label" for="flexSwitchCheckDefault"><p className="Dark-Mode">Modo oscuro</p></label>}
            </div>
        </div>
    )
}

export {LightButton}