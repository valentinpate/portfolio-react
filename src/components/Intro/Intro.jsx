import "./Intro.css"
import img from "./1c.jpg"

function Intro(){
    return(
        <div className="IntroContainer">
            <img src={img} alt="" />
            <div className="IntroInformation">
                <h1>Valentín Pate</h1>
                <h3>Transformando ideas en soluciones funcionales y elegantes. <br />¡Colaboremos!</h3>
                <button>Descargar mi CV</button>
            </div>
        </div>
    )
}

export {Intro}