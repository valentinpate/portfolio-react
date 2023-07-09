import React, {useState,useContext} from "react"

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
    const [modoOscuro, setModoOscuro] = useState(false)
    const [menu,setMenu] = useState(false)
    const [bodyColor,setBodyColor] = useState(false)

    return(
        <ThemeContext.Provider value={ {modoOscuro,setModoOscuro, menu, setMenu, bodyColor, setBodyColor} }>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}

export const useTheme = () => useContext(ThemeContext)

