import "./Contact.css"

function Contact(){
    return(
        <div className="ContactsMainContainer">
            <h2>Contactame</h2>
            <div className="ContactsContainer">
                <div className="Contacts">
                    <input type="text" className="MarginInput" placeholder="Nombre completo"/>
                    <input type="text" placeholder="E-mail"/>
                </div>
                <div className="Area">
                    <input type="text" placeholder="Asunto"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Escribe tu mensaje..."></textarea>
                </div>
            </div>
            <button>Enviar mensaje</button>
        </div>
    )
}

export {Contact}