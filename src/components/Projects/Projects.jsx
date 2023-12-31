import "./Projects.css"
import pageOne from "./page1.png"
import pageTwo from "./page2.png"
import pageThree from "./page3.png"
import { useTheme } from "../ThemeProvider"

const Projects = () => {
    const {modoOscuro, setModoOscuro} = useTheme()
    return(
        <>
            {modoOscuro===false && <div className="ProjectsContainer" id="Projects">
                <h2>Proyectos</h2>
                <div className="ProjectContainer">
                    <div className="Project">
                        <img src={pageOne} alt="Página de Ivyre" />
                        <p>14 - 05 - 2023</p>
                        <p className="Stomp">Página de Ivyre</p>
                        <a href="https://valentinpate.github.io/tp2/" target="_blank">Ver Proyecto</a>
                    </div>
                    <div className="Project">
                        <img src={pageTwo} alt="Página de Ivyre" />
                        <p>05 - 06 - 2023</p>
                        <p className="Stomp">Portfolio HTML/CSS</p>
                        <a href="https://valentinpate.github.io/portfolio/" target="_blank">Ver Proyecto</a>
                    </div>
                    <div className="Project">
                        <img src={pageThree} alt="Página de Ivyre" />
                        <p>09 - 06 - 2023</p>
                        <p className="Stomp">Galería de Imágenes JS</p>
                        <a href="https://valentinpate.github.io/galeria/" target="_blank">Ver Proyecto</a>
                    </div>
                </div>
            </div>}
            {modoOscuro===true && <div className="ProjectsContainerDark" id="ProjectsDark">
                <h2>Proyectos</h2>
                <div className="ProjectContainer">
                    <div className="Project">
                        <img src={pageOne} alt="Página de Ivyre" />
                        <p>14 - 05 - 2023</p>
                        <p className="Stomp">Página de Ivyre</p>
                        <a href="https://valentinpate.github.io/tp2/" target="_blank">Ver Proyecto</a>
                    </div>
                    <div className="Project">
                        <img src={pageTwo} alt="Página de Ivyre" />
                        <p>05 - 06 - 2023</p>
                        <p className="Stomp">Portfolio HTML/CSS</p>
                        <a href="https://valentinpate.github.io/portfolio/" target="_blank">Ver Proyecto</a>
                    </div>
                    <div className="Project">
                        <img src={pageThree} alt="Página de Ivyre" />
                        <p>09 - 06 - 2023</p>
                        <p className="Stomp">Galería de Imágenes JS</p>
                        <a href="https://valentinpate.github.io/galeria/" target="_blank">Ver Proyecto</a>
                    </div>
                </div>
            </div>}
        </>
    )
}

export {Projects}