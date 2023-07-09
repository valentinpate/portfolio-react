import { useTheme } from "../ThemeProvider";
import "./HiddenLightButton.css"

const HiddenLightButton = () => {
    let {modoOscuro, setModoOscuro, bodyColor, setBodyColor} = useTheme()
    let cuerpo = document.querySelector("body")

    function oscuro(){
        setModoOscuro(!modoOscuro)
        setBodyColor(!bodyColor)
        if(!bodyColor === true){
            cuerpo.style.backgroundColor = "rgb(28,32,37)"
        }else{
            cuerpo.style.backgroundColor = "rgb(242,242,242)"
        }
    }

    return(
        <>
        <div className="HiddenLightButton">
            <div className="CheckboxContainer" id="ButtonContainer">
                <div className="form-check form-switch Light-Mode">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={oscuro}></input>
                    {modoOscuro === false && <label className="form-check-label" for="flexSwitchCheckDefault">Modo oscuro</label>}
                    {modoOscuro === true && <div className="Dark-Mode">
                        <label className="form-check-label" for="flexSwitchCheckDefault"><p className="Dark-Mode">Modo oscuro</p></label>
                        </div>}
                </div>
            </div>
        </div>
        </>
    )
}

export {HiddenLightButton}
