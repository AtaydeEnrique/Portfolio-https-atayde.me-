import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const nameValidation = (e) => {
    const name = e.target.value.trim();
    setVisitorName(name);
    if (name && name.length < 30) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
  };

  const emailValidation = (e) => {
    const email = e.target.value.trim();
    setVisitorEmail(email);
    if (email && email.includes("@")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const data = { email: visitorEmail, name: visitorName };
    if (nameIsValid && emailIsValid) {
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
    <section>
      <form className="pageclip-form" onSubmit={sendMessage}>
        <input
          type="text"
          name="name"
          value={visitorName}
          onChange={nameValidation}
          placeholder="Enter your name"
          required
        />
        <input
          onChange={emailValidation}
          type="email"
          name="email"
          value={visitorEmail}
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="pageclip-form__submit"
          disabled={!nameIsValid || !emailIsValid}
        >
          <span>Send</span>
        </button>
      </form>
    </section>
  );
};
export default Form;
