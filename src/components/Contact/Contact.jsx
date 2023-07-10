import "./Contact.css"
import { useState } from "react"
import { useTheme } from "../ThemeProvider"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const {modoOscuro, setModoOscuro} = useTheme()

    const [enviado,setEnviado]=useState(false)

    const [nombre,setNombre]=useState("")

    const [email,setEmail]=useState("")

    const [asunto,setAsunto]=useState("")

    const [mensaje,setMensaje]=useState("")

    const sendEmail = (event) => {
        event.preventDefault()
        emailjs.sendForm("service_cksz26v","template_k508bf7",event.target,"GRGTWVL0w40udYlyW")
        .catch(error=>console.log("Error 404"))
    }

    const Enviar = () => {
        setEnviado(true)
    }

    const actualizarNombre = (e) => {
        setNombre(e.target.value)
    }

    const actualizarEmail = (e) => {
        setEmail(e.target.value)
    }

    const actualizarAsunto = (e) => {
        setAsunto(e.target.value)
    }

    const actualizarMensaje = (e) => {
        setMensaje(e.target.value)
    }

    return(
        <>
            {modoOscuro===false && <div className="ContactsMainContainer">
                <h2>Contactame</h2>
                <div className="ContactsContainer">
                    <form onSubmit={sendEmail}>
                        <div className="Contacts">
                            <input type="text" name="user_name" className="MarginInput" value={nombre} onChange={actualizarNombre} placeholder="Nombre completo"/>
                            <input type="text" name="user_email" value={email} onChange={actualizarEmail} placeholder="E-mail"/>
                        </div>
                        <div className="Area">
                            <input type="text" name="user_subject" value={asunto} onChange={actualizarAsunto} placeholder="Asunto"/>
                            <textarea name="user_message" id="" cols="30" rows="10" value={mensaje} onChange={actualizarMensaje} placeholder="Escribe tu mensaje..."></textarea>
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
                            <input type="text" name="user_name" className="MarginInput" value={nombre} onChange={actualizarNombre} placeholder="Nombre completo"/>
                            <input type="text" name="user_email" value={email} onChange={actualizarEmail} placeholder="E-mail"/>
                        </div>
                        <div className="Area">
                            <input type="text" name="user_subject" value={asunto} onChange={actualizarAsunto} placeholder="Asunto"/>
                            <textarea name="user_message" id="" cols="30" rows="10" value={mensaje} onChange={actualizarMensaje} placeholder="Escribe tu mensaje..."></textarea>
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