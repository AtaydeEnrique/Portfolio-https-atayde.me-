import { Fragment, useState } from "react";

import ContactModal from "../../UI/Modals/ContactModal";
import Kraken from "../../UI/Kraken/Kraken";
import "./ContactMenu.css";
import Form from "../../Sections/Form/Form";

const ContactMenu = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [didLoad, setDidLoad] = useState(null);

  const sendData = async (data, validForm) => {
    setIsLoading(true);
    if (validForm) {
      try {
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
      } catch {}
      setIsLoading(false);
    }
  };

  return (
    <ContactModal onClose={onClose}>
      <div className="contact-menu">
        <div className="rainbow-wrap">
          <div className="rainbow-border">
            <span></span>
            <span></span>
          </div>
          <div className="contact">
            {/* {isLoading ? (
              ""
            ) : (
              <Fragment>
                <div className="contact-title">Let's work together!</div>
                <Form sendData={sendData} />
              </Fragment>
            )} */}
          </div>
        </div>
      </div>
      <Kraken />
    </ContactModal>
  );
};

export default ContactMenu;
