import React, { useState } from 'react';
import '../../styles/Contact.css'


export default function Contact() {
    const requiredMes = "*Required*";

    const [nameReq, setNameReq] = useState("")
    const [emailReq, setEmailReq] = useState("")
    const [messageReq, setMessageReq] = useState("")

    const changeReq = (event, caller) => {
        if (caller === "name") {
            if ( event.target.value === '') {
                setNameReq(requiredMes)
                return
            }
            setNameReq("")
        }
        if (caller === "email") {
            if ( event.target.value === '') {
                setEmailReq(requiredMes)
                return
            }
            setEmailReq("")
        }
        if (caller === "message") {
            if ( event.target.value === '') {
                setMessageReq(requiredMes)
                return
            }
            setMessageReq("")
        }
    }

  return (
    <div className='page-container'>
      <div className='page-card'>
      <h1>Contact Me</h1>
      <section className='form-box'>
        <label className='form-inputs'>Name: <span className='req-message'>{nameReq}</span></label>
        <input className='form-inputs' 
        onChange={event => changeReq(event, "name")}
        onMouseLeave={event => changeReq(event, "name")}
        onBlur={event => changeReq(event, "name")}
        type="text" id='contact-name'></input>

        <label className='form-inputs'>Email: <span className='req-message'>{emailReq}</span></label>
        <input className='form-inputs'
        onChange={event => changeReq(event, "email")}
        onMouseLeave={event => changeReq(event, "email")}
        onBlur={event => changeReq(event, "email")}
         type="text" id='contact-email'></input>
        
        <label className='form-inputs'>Message: <span className='req-message'>{messageReq}</span></label>
        <textarea className='form-inputs' 
         onChange={event => changeReq(event, "message")}
         onMouseLeave={event => changeReq(event, "message")}
         onBlur={event => changeReq(event, "message")}
        type="textArea" id='contact-message'></textarea>

        <button id="contact-submit">Submit</button>
      </section>
      <p>Or at: <br/>Email: <a href='mailto:Bonee94@yahoo.com'>Bonee94@yahoo.com</a> <br/>
      Cell: <a href='tel:2103635213'>210-363-5213</a></p>
      </div>
    </div>
  );
}
