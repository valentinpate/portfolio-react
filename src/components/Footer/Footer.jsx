import "./Footer.css"
import {FooterImg} from "../FooterImg/FooterImg"
import {FooterDarkImg} from "../FooterDarkImg/FooterDarkImg"

function Footer(){
    return(
        <div className="FooterContainer">
            <div className="FooterLight">
                <FooterImg />
            </div>
            <div className="FooterDark">
                <FooterDarkImg />
            </div>
            <hr />
            <p>©2023 TK | All rights reserved</p>
        </div>
    )
}

export {Footer}