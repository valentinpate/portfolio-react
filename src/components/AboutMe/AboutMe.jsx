import React, {useState} from "react"
import "./AboutMe.css"

function AboutMe(){
    const [modoOscuro, setModoOscuro] = useState(false)

    function oscuro(){
        setModoOscuro(!modoOscuro)
    }
    return(
        <>
        {modoOscuro === false &&<div className="AboutMeContainer" onClick={oscuro}>
            <h2>Sobre Mí</h2>
            <p>Hola, soy Valentín Pate, un joven programador apasionado por la computación. Estoy ansioso por conocer las posibilidades infinitas que la industria ofrece y siempre busco conocer más. Mi meta es lograr convertirme en un buen programador profesional y contribuir al mundo digital que crece sin freno. Constantemente estoy buscando nuevos desafíos y oportunidades para expandir y mejorar mis habilidades, por lo que no tengas problema en contactarme.</p>
        </div>}
        {modoOscuro === true &&<div className="AboutMeContainer AboutMeDark" onClick={oscuro}>
        <h2>Sobre Mí</h2>
            <p>Hola, soy Valentín Pate, un joven programador apasionado por la computación. Estoy ansioso por conocer las posibilidades infinitas que la industria ofrece y siempre busco conocer más. Mi meta es lograr convertirme en un buen programador profesional y contribuir al mundo digital que crece sin freno. Constantemente estoy buscando nuevos desafíos y oportunidades para expandir y mejorar mis habilidades, por lo que no tengas problema en contactarme.</p>
            </div>}
        </>
    )
}

export { AboutMe }