import "./Experience.css"
import { useTheme } from "../ThemeProvider"

const Experience = () => {
    const {modoOscuro, setModoOscuro} = useTheme()
    return(
        <>
        {modoOscuro===false &&<div className="ExperienceContainer">
            <h2>Experiencia</h2>
            <div className="ExperienceSquareContainer">
                <div className="ExperienceSquare">
                    <h3>Estudiante de Diseño Web</h3>
                    <p>Marzo 2022 - Junio 2022</p>
                    <ul>
                        <li>Primeros pasos en HTML y CSS.</li>
                        <li>Primera vez usando Neocities.</li>
                        <li>Creación de proyectos utilizando frameworks, Paper CSS y Materialize CSS.</li>
                        <li>Pequeños vistazos en JavaScript. Utilización de jQuery.</li>
                        <li>Tomé la decisión de aprender más acerca del vasto mundo de la programación.</li>
                    </ul>
                </div>
                <div className="ExperienceSquare">
                    <h3>Estudiante de Programación Front-End</h3>
                    <p>Abril 2023 - Julio 2023</p>
                    <ul>
                        <li>Extendí mi conocimiento sobre HTML y CSS.</li>
                        <li>Primeros pasos con JavaScript.</li>
                        <li>Primeros pasos con Responsive Web Design.</li>
                        <li>Aprendí a utilizar GIT, GitHub.</li>
                        <li>Descubrimiento y primeros pasos con React JS.</li>
                        <li>Creación y diseño web de páginas más complejas y con eventos.</li>
                    </ul>
                </div>
            </div>
        </div>}
        {modoOscuro===true &&<div className="ExperienceContainerDark">
            <h2>Experiencia</h2>
            <div className="ExperienceSquareContainer">
                <div className="ExperienceSquare">
                    <h3>Estudiante de Diseño Web</h3>
                    <p>Marzo 2022 - Junio 2022</p>
                    <ul>
                        <li>Primeros pasos en HTML y CSS.</li>
                        <li>Primera vez usando Neocities.</li>
                        <li>Creación de proyectos utilizando frameworks, Paper CSS y Materialize CSS.</li>
                        <li>Pequeños vistazos en JavaScript. Utilización de jQuery.</li>
                        <li>Tomé la decisión de aprender más acerca del vasto mundo de la programación.</li>
                    </ul>
                </div>
                <div className="ExperienceSquare">
                    <h3>Estudiante de Programación Front-End</h3>
                    <p>Abril 2023 - Julio 2023</p>
                    <ul>
                        <li>Extendí mi conocimiento sobre HTML y CSS.</li>
                        <li>Primeros pasos con JavaScript.</li>
                        <li>Primeros pasos con Responsive Web Design.</li>
                        <li>Aprendí a utilizar GIT, GitHub.</li>
                        <li>Descubrimiento y primeros pasos con React JS.</li>
                        <li>Creación y diseño web de páginas más complejas y con eventos.</li>
                    </ul>
                </div>
            </div>
        </div>}
        </>
    )
}

export {Experience}