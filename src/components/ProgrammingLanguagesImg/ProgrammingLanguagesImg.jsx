import "./ProgrammingLanguagesImg.css"
import react from "./react.png"
import js from "./js.png"
import html from "./html.png"
import css from "./css.png"

function ProgrammingLanguagesImg(){
return(
        <div className="Languages">
            <img src={react} alt="React" />
            <img src={js} alt="JavaScript" />
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
        </div>
    )
}


export {ProgrammingLanguagesImg}