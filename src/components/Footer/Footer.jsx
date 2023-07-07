import "./Footer.css"
import {FooterImg} from "../FooterImg/FooterImg"
import {FooterDarkImg} from "../FooterDarkImg/FooterDarkImg"
import { useTheme } from "../ThemeProvider"

const Footer = () => {
    const {modoOscuro, setModoOscuro} = useTheme()
    return(
        <>
            {modoOscuro===false && <div className="FooterContainer">
                <div className="FooterLight">
                    <FooterImg />
                </div>
                <hr />
                <p>©2023 TK | All rights reserved</p>
            </div>}
            {modoOscuro===true && <div className="FooterContainerDark">
                <div className="FooterDark">
                    <FooterDarkImg />
                </div>
                <hr />
                <p>©2023 TK | All rights reserved</p>
            </div>}
        </>
    )
}

export {Footer}