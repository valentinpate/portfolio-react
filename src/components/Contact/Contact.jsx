import "./Contact.css"
import { useState } from "react"
import { useTheme } from "../ThemeProvider"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const {modoOscuro, setModoOscuro} = useTheme()

    const [enviado,setEnviado]=useState(false)

    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm("service_cksz26v","template_k508bf7",event.target,"GRGTWVL0w40udYlyW")
        .catch(error=>console.log("Error 404"))
    }

    const Enviar = () => {
        setEnviado(true)
    }

    return(
        <>
            {modoOscuro===false && <div className="ContactsMainContainer">
                <h2>Contactame</h2>
                <div className="ContactsContainer">
                    <form onSubmit={sendEmail}>
                        <div className="Contacts">
                            <input type="text" name="user_name" className="MarginInput" placeholder="Nombre completo"/>
                            <input type="text" name="user_email" placeholder="E-mail"/>
                        </div>
                        <div className="Area">
                            <input type="text" name="user_subject" placeholder="Asunto"/>
                            <textarea name="user_message" id="" cols="30" rows="10" placeholder="Escribe tu mensaje..."></textarea>
                        </div>
                        <div className="Sent">
                            <button onClick={Enviar}>Enviar mensaje</button>
                            {enviado===true && <p><strong>Su mensaje ha sido enviado.</strong></p>}
                        </div>
                    </form>
                </div>
            </div>}
            {modoOscuro===true && <div className="ContactsMainContainerDark">
                <h2>Contactame</h2>
                <div className="ContactsContainer">
                    <form onSubmit={sendEmail}>
                        <div className="Contacts">
                            <input type="text" name="user_name" className="MarginInput" placeholder="Nombre completo"/>
                            <input type="text" name="user_email" placeholder="E-mail"/>
                        </div>
                        <div className="Area">
                            <input type="text" name="user_subject" placeholder="Asunto"/>
                            <textarea name="user_message" id="" cols="30" rows="10" placeholder="Escribe tu mensaje..."></textarea>
                        </div>
                        <div className="Sent">
                            <button onClick={Enviar}>Enviar mensaje</button>
                            {enviado===true && <p><strong>Su mensaje ha sido enviado.</strong></p>}
                        </div>
                    </form>
                </div>
            </div>}
        </>
    )
}

export {Contact}