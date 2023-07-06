import React, {useState, useContext} from "react"

const ThemeContext = React.createContext()

export function ThemeProvider({children}) {
    const [modoOscuro, setModoOscuro] = useState(false)

    return(
        <ThemeContext.Provider value={ {modoOscuro,setModoOscuro} }>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

