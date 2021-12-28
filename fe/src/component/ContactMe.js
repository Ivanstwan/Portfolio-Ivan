import React, { useState } from "react";
import "./contactMe.css";
import Axios from "axios";
import { URL_API } from "../helper";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [err, setErr] = useState("");

  const [btnDisable, setBtnDisable] = useState(false);

  const checkState = () => {
    console.log(name, "name");
    console.log(email, "email");
    console.log(message, "message");
  };

  const resetErr = () => {
    setErr("");
  };

  return (
    <div className="contact-me">
      <div className="cm-container">
        <div className="cm-text-container">
          <div className="cm-text">
            If you wanna talk or want to work together,
          </div>
          <div className="cm-text">
            fill up the form below or send an email to{" "}
            <b className="cm-text-b">Ivan.stwan@gmail.com</b>, let's get in
            touch.
          </div>
        </div>
        <div className="cm-input-container">
          <div className="cm-input-name-container">
            <i className="fas fa-user" />
            <input
              type="text"
              className="cm-input-name"
              placeholder="Fill with your name"
              onChange={(e) => {
                setName(e.target.value);
                resetErr();
              }}
            />
          </div>
          <div className="cm-input-email-container">
            <i className="fas fa-envelope" />
            <input
              type="text"
              className="cm-input-email"
              placeholder="and your email"
              onChange={(e) => {
                setEmail(e.target.value);
                resetErr();
              }}
            />
          </div>
          <div className="cm-input-message-container">
            <i className="fas fa-edit" />
            <input
              type="text"
              className="cm-input-message"
              placeholder="now write your message"
              onChange={(e) => {
                setMessage(e.target.value);
                resetErr();
              }}
            />
          </div>
          <button
            className="cm-button-container"
            onClick={() => {
              checkState();
              if (name && email && message) {
                console.log("good to go");
                setBtnDisable(true);
                Axios.post(`http://13.229.127.170/user/portfolio`, {
                  name: name,
                  email: email,
                  message: message,
                })
                  .then((res) => {
                    console.log(res);
                    setErr("Message sent. Thanks for the response.");
                    setBtnDisable(false);
                  })
                  .catch((err) => {
                    console.log(err);
                    setErr(
                      "Message failed to be sent. Please try later or contact by email."
                    );
                    setBtnDisable(false);
                  });
              } else {
                setErr("Please fill the empty form");
              }
            }}
            disabled={btnDisable}
          >
            <div className="cm-button">
              {btnDisable ? "Loading" : "SUBMIT YOUR MESSAGE"}
            </div>
          </button>
          <div className="cm-button-response">{err ? err : " "}</div>
        </div>
        <div className="cm-other">
          <div className="cm-other-text">
            Or reach out to me in my social account
          </div>
          <a href="https://www.linkedin.com/in/ivanstwan/" className="cm-a">
            <div className="cm-a-text">LinkedIn</div>
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
