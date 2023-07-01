import "./LightButton.css"

function LightButton(){
    return(
        <div className="CheckboxContainer" id="ButtonContainer">
            <div className="form-check form-switch Light-Mode">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                <label className="form-check-label" for="flexSwitchCheckDefault">Modo oscuro</label>
            </div>
            <div className="form-check form-switch Dark-Mode">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"></input>
                <label className="form-check-label" for="flexSwitchCheckDefault">Modo oscuro</label>
            </div>
        </div>
    )
}

export {LightButton}