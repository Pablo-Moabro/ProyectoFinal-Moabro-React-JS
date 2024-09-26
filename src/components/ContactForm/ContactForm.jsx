import "./ContactForm.css"

const ContactForm = () => {
    
    return(
        
    <div className="form">
        <h1>Dejanos tu consulta</h1>
        
        <form action="" className="form-container">
            <label htmlFor="name"></label>
            <input className="form-input" type="text" name="user-name" id="name" placeholder="Nombre y Apellido" required />
            <label htmlFor="email"></label>
            <input className="form-input" type="text" name="user-email" id="email" placeholder="Ingrese su Email" required />
            <label htmlFor="reason"></label>
            <textarea className="form-textarea" name="reason" id="reason" placeholder="Motivo de su consulta"></textarea>
            <button className="form-btn" type="submit">Enviar</button>
        </form>
    </div>
    
    )

}

export default ContactForm;