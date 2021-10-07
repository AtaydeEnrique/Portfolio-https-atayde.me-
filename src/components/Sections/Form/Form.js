import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorMessage, setVisitorMessage] = useState("");
  const [nameIsValid, setNameIsValid] = useState({
    focus: false,
    valid: false,
  });
  const [emailIsValid, setEmailIsValid] = useState({
    focus: false,
    valid: false,
  });
  const [messageIsValid, setMessageIsValid] = useState({
    focus: false,
    valid: false,
  });

  const nameValidation = (e) => {
    const name = e.target.value.trim();
    setVisitorName(name);
    if (name && name.length < 30) {
      setNameIsValid({ valid: true });
    } else {
      setNameIsValid({ valid: false });
    }
  };

  const emailValidation = (e) => {
    const email = e.target.value.trim();
    setVisitorEmail(email);
    setEmailIsValid({ focus: true });
    if (email && email.includes("@")) {
      setEmailIsValid({ valid: true });
    } else {
      setEmailIsValid({ valid: false });
    }
  };

  const messageValidation = (e) => {
    const message = e.target.value.trim();
    setVisitorMessage(message);
    if (message && message.length > 20 && message.length < 200) {
      setMessageIsValid({ valid: true });
    } else {
      setMessageIsValid({ valid: false });
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const data = {
      email: visitorEmail,
      name: visitorName,
      message: visitorMessage,
    };
    if (nameIsValid.valid && emailIsValid.valid && messageIsValid.valid) {
      const promise = await fetch(
        "https://send.pageclip.co/1KVcle4hvDDKpiHxudAkQ2r38p6ZvT5k",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "X-REQMETHOD": "form-v1",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(promise);
    }
  };
  return (
    <form className="contact-form" onSubmit={sendMessage}>
      <input
        className={`contact-name${
          nameIsValid.valid || !nameIsValid.focus ? "" : " error"
        }`}
        type="text"
        name="name"
        value={visitorName}
        onChange={nameValidation}
        onFocus={() => {
          setNameIsValid({ focus: true });
        }}
        placeholder="Enter your name"
        required
      />
      <input
        className={`contact-email${
          emailIsValid.valid || !emailIsValid.focus ? "" : " error"
        }`}
        onChange={emailValidation}
        onFocus={() => {
          setEmailIsValid({ focus: true });
        }}
        type="email"
        name="email"
        value={visitorEmail}
        placeholder="Enter your email"
        required
      />
      <textarea
        className={`contact-message${messageIsValid.valid ? "" : " error"}`}
        minlength="20"
        maxLength="200"
        onChange={messageValidation}
        name="message"
        value={visitorMessage}
        placeholder="Want to say something?"
        required
      ></textarea>

      <br />
      <button
        type="submit"
        className="contact-submit"
        disabled={
          !nameIsValid.valid || !emailIsValid.valid || !messageIsValid.valid
        }
      >
        <span>Send</span>
      </button>
    </form>
  );
};
export default Form;
