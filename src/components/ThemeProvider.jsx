import React, {useState,useContext} from "react"

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
    const [modoOscuro, setModoOscuro] = useState(false)

    return(
        <ThemeContext.Provider value={ {modoOscuro,setModoOscuro} }>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}

export const useTheme = () => useContext(ThemeContext)

