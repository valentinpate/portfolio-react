import "./FooterImg.css"
import Facebook from "./facebook.svg"
import GitHub from "./github.svg"
import LinkedIn from "./linkedin.svg"
import Mail from "./mail.svg"

const FooterImg = () => {
    return(
        <div className="FooterImages">
            <a href="https://www.facebook.com/valentin.pate.37/"><img src={Facebook} alt="" /></a>
            <a href="https://www.github.com/valentinpate"><img src={GitHub} alt=""/></a>
            <img src={LinkedIn} alt="" />
            <img src={Mail} alt="" />
        </div>
    )
}

export {FooterImg}