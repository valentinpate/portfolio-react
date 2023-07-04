import "../FooterImg/FooterImg.css"
import "./FooterDarkImg.css"
import FacebookDark from "./facebookDark.svg"
import GitHubDark from "./githubDark.svg"
import LinkedInDark from "./linkedinDark.svg"
import MailDark from "./mailDark.svg"

function FooterDarkImg(){
    return(
        <div className="FooterImages FooterImagesDark">
            <a href="https://www.facebook.com/valentin.pate.37/"><img src={FacebookDark} alt="" /></a>
            <a href="https://www.github.com/valentinpate"><img src={GitHubDark} alt="" /></a>
            <img src={LinkedInDark} alt="" />
            <img src={MailDark} alt="" />
        </div>
    )
}

export {FooterDarkImg}