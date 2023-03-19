import React, { useState } from "react";
import "../../styles/Contact.css";
import qrCode from "../../assets/images/contact-qr-code.png";
import OnVisible, { setDefaultProps } from 'react-on-visible';


export default function Contact() {
setDefaultProps({
    bounce: true,
    visibleClassName: 'qr-code-anim-small',
    percent: 10
});

  
  const requiredMes = "*Required*";

  const [nameReq, setNameReq] = useState("");
  const [emailReq, setEmailReq] = useState("");
  const [messageReq, setMessageReq] = useState("");

  //For local development of qr code
  // const site = window.location.href;
  // const url = site.split('#')[0]+'/Taylor-Turner.vcf';

  //for deployed qr code
  const url =
    "https://bonee94.github.io/taylors-react-portfolio/Taylor-Turner.vcf";

  const changeReq = (event, caller) => {
    if (caller === "name") {
      if (event.target.value === "") {
        setNameReq(requiredMes);
        return;
      }
      setNameReq("");
    }

    if (caller === "email") {
      if (event.target.value === "") {
        setEmailReq(requiredMes);
        return;
      }
      setEmailReq("");
    }

    if (caller === "emailValid") {
      if (event.target.value === "") {
        setEmailReq(requiredMes);
        return;
      }

      const valid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(
        event.target.value
      );

      valid
        ? setEmailReq("")
        : setEmailReq("*A valid email address is required*");
    }

    if (caller === "message") {
      if (event.target.value === "") {
        setMessageReq(requiredMes);
        return;
      }
      setMessageReq("");
    }
  };

  const qrCodeDownload = () => {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Taylor Turner";
        alink.click();
      });
    });
  };

  return (
    <div className="page-container">
      <div className="page-card">
        <h1>Contact Me</h1>
        <div className="contact-flexbox">
          <section className="form-box">
            <h2>Leave a message:</h2>
            <label className="form-inputs">
              Name: <span className="req-message">{nameReq}</span>
            </label>
            <input
              className="form-inputs"
              onChange={(event) => changeReq(event, "name")}
              onMouseLeave={(event) => changeReq(event, "name")}
              onBlur={(event) => changeReq(event, "name")}
              type="text"
              id="contact-name"
            ></input>

            <label className="form-inputs">
              Email: <span className="req-message">{emailReq}</span>
            </label>
            <input
              className="form-inputs"
              onChange={(event) => changeReq(event, "email")}
              onMouseLeave={(event) => changeReq(event, "emailValid")}
              onBlur={(event) => changeReq(event, "emailValid")}
              type="email"
              id="contact-email"
            ></input>

            <label className="form-inputs">
              Message: <span className="req-message">{messageReq}</span>
            </label>
            <textarea
              className="form-inputs"
              onChange={(event) => changeReq(event, "message")}
              onMouseLeave={(event) => changeReq(event, "message")}
              onBlur={(event) => changeReq(event, "message")}
              type="textArea"
              id="contact-message"
            ></textarea>

            <button id="contact-submit">Submit</button>
          </section>
          <section className="qr-code-box-big">
            <h2>Scan or click for contact info</h2>
            <button id="qr-code-btn" onClick={qrCodeDownload}>
                <img id="qr-code" className="qr-code-anim" src={qrCode} alt="contact qr code"></img>
            </button>
          </section>
        </div>
        <p>
          Or at: <br />
          Email: <a href="mailto:Bonee94@yahoo.com">Bonee94@yahoo.com</a> <br />
          Cell: <a href="tel:2103635213">210-363-5213</a>
        </p>

        <div className="qr-code-box">
          <button id="qr-code-btn" onClick={qrCodeDownload}>
            <OnVisible><img id="qr-code-invis" className="qr-code-invis" src={qrCode} alt="contact qr code"></img></OnVisible>
          </button>
          <h3>Scan or click for my info</h3>
        </div>
      </div>
    </div>
  );
}
