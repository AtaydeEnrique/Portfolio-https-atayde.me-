import { useState } from "react";
import "./Form.css";

const Form = ({ sendData, isLoading }) => {
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorMessage, setVisitorMessage] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const nameValidation = (e) => {
    const name = e.target.value;
    setVisitorName(name);
    if (name.trim().length > 1 && name.length < 30 && nameFocus) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
  };

  const emailValidation = (e) => {
    const email = e.target.value.trim();
    setVisitorEmail(email);
    if (email && email.includes("@" && ".") && emailFocus) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const messageValidation = (e) => {
    const message = e.target.value;
    setVisitorMessage(message);
    if (message.length > 10 && message.length < 200 && messageFocus) {
      setMessageIsValid(true);
    } else {
      setMessageIsValid(false);
    }
  };
  const validForm = nameIsValid && emailIsValid && messageIsValid;

  const sendMessage = (e) => {
    e.preventDefault();
    const data = {
      email: visitorEmail,
      name: visitorName,
      message: visitorMessage,
    };
    sendData(data, validForm);
  };

  const validName = nameIsValid || !nameFocus;
  const validEmail = emailIsValid || !emailFocus;
  const validMessage = messageIsValid || !messageFocus;
  const disabled = !nameIsValid || !emailIsValid || !messageIsValid;

  return (
    <form
      className={`contact-form${isLoading ? " loading" : ""}`}
      onSubmit={sendMessage}
    >
      <div className="form-group">
        <div className="form-label-wrap">
          <label htmlFor="name">Name</label>
          {validName ? null : <span>Required</span>}
        </div>
        <input
          id="name"
          className={`contact-name${validName ? "" : " error"}${
            nameIsValid ? " complete" : ""
          }`}
          type="text"
          name="name"
          value={visitorName}
          onChange={nameValidation}
          onFocus={() => {
            setNameFocus(true);
          }}
          placeholder="Your name"
          required
        />
      </div>
      <div className="form-group">
        <div className="form-label-wrap">
          <label htmlFor="email">Email</label>
          {validEmail ? null : <span>Please, enter a valid Email</span>}
        </div>
        <input
          id="email"
          className={`contact-email${validEmail ? "" : " error"}${
            emailIsValid ? " complete" : ""
          }`}
          onChange={emailValidation}
          onFocus={() => {
            setEmailFocus(true);
          }}
          type="email"
          name="email"
          value={visitorEmail}
          placeholder="you@yourdomain.com"
          required
        />
      </div>
      <div className="form-group">
        <div className="form-label-wrap">
          <label htmlFor="message">Message</label>
          {validMessage ? null : <span>Enter a small message :)</span>}
        </div>
        <textarea
          id="message"
          className={`contact-message${validMessage ? "" : " error"}${
            messageIsValid ? " complete" : ""
          }`}
          minLength="20"
          maxLength="200"
          onChange={messageValidation}
          onFocus={() => {
            setMessageFocus(true);
          }}
          name="message"
          value={visitorMessage}
          placeholder="Want to say something?"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className={
          disabled ? "contact-submit-disabled" : "contact-submit-enabled"
        }
        disabled={disabled}
      >
        <span>Send</span>
      </button>
    </form>
  );
};
export default Form;
