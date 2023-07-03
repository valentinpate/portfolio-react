import "../FooterImg/FooterImg.css"
import "./FooterDarkImg.css"
import FacebookDark from "./facebookDark.svg"
import GitHubDark from "./githubDark.svg"
import LinkedInDark from "./linkedinDark.svg"
import MailDark from "./mailDark.svg"

function FooterDarkImg(){
    return(
        <div className="FooterImages FooterImagesDark">
            <img src={GitHubDark} alt="" />
            <img src={FacebookDark} alt="" />
            <img src={LinkedInDark} alt="" />
            <img src={MailDark} alt="" />
        </div>
    )
}