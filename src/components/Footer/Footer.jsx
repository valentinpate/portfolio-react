import React, { useState } from "react";
import "./Footer.css"
import {FooterImg} from "../FooterImg/FooterImg"
import {FooterDarkImg} from "../FooterDarkImg/FooterDarkImg"

function Footer(){
    const [modoOscuro, setModoOscuro] = useState(false)

    function oscuro(){
        setModoOscuro(!modoOscuro)
    }
    return(
        <div className="FooterContainer">
            {modoOscuro===false &&<div className="FooterLight">
                <FooterImg />
            </div>}
            {modoOscuro===true && <div className="FooterDark">
                <FooterDarkImg />
            </div>}
            <hr />
            <p>©2023 TK | All rights reserved</p>
        </div>
    )
}

export {Footer}