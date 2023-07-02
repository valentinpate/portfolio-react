import "./Photo.css"
import picture from "./1c.jpg"

function Photo(){
    return(
        <>
            <img src={picture} className="Foto" alt="Foto" />
        </>
    )
}

export {Photo}