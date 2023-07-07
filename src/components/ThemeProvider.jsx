import React, {useState, useContext} from "react"

const ThemeContext = React.createContext()

export function ThemeProvider({children}) {
    let cuerpo = document.getElementById("body")
    const [bodyColor,setBodyColor] = useState(false)
    const [modoOscuro, setModoOscuro] = useState(false)

    function oscuro(){
        setModoOscuro(!modoOscuro)
        setBodyColor(!bodyColor)
        if(!bodyColor === true){
            cuerpo.style.backgroundColor = "rgb(28,32,37)"
        }else{
            cuerpo.style.backgroundColor = "rgb(242,242,242)"
        }
    }

    oscuro()

    return(
        <ThemeContext.Provider value={ {modoOscuro,setModoOscuro} }>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

