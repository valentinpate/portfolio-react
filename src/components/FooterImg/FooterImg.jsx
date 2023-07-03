import "./FooterImg.css"
import Facebook from "./facebook.svg"
import GitHub from "./github.svg"
import LinkedIn from "./linkedin.svg"
import Mail from "./mail.svg"

function FooterImg(){
    return(
        <div className="FooterImages FooterImagesLight">
            <img src={Facebook} alt="" />
            <img src={GitHub} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Mail} alt="" />
        </div>
    )
}