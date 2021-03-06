import { Fragment, useState } from "react";
import { Transition } from "react-transition-group";

import ContactModal from "../../../UI/Modals/ContactModal";
import Kraken from "../../../UI/Kraken/Kraken";
import "./ContactMenu.css";
import Spinner from "../../../UI/Spinner/Spinner";
import Form from "./Form/Form";
import SuccessScreen from "./SuccessScreen/SuccessScreen";
const windowWidth = window.innerWidth <= 850;

const ContactMenu = ({ onClose, kraken, hideMenuHandler }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [didLoad, setDidLoad] = useState(null);
  
  const sendData = async (data, validForm) => {
    setIsLoading(true);
    if (validForm) {
      try {
        const promise = await fetch(
          `https://send.pageclip.co/${process.env.REACT_APP_VERCEL_PAPERCLIP}`,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "X-REQMETHOD": "form-v1",
              "Content-Type": "application/json",
            },
          }
        );
        if (promise.ok) {
          setDidLoad(true);
          hideMenuHandler();
          setTimeout(() => {
            onClose();
            hideMenuHandler();
          }, 5000);
          setTimeout(() => {
            setDidLoad(null);
          }, 9000);
        }
      } catch {
        setDidLoad(false);
        setTimeout(() => {
          setDidLoad(null);
        }, 2000);
      }
      setIsLoading(false);
    }
  };
  return (
    <Transition in={kraken} timeout={2000} mountOnEnter unmountOnExit>
      {(state) => (
        <ContactModal show={state} onClose={onClose}>
          {didLoad === true ? (
            <SuccessScreen />
          ) : (
            <Fragment>
              <div className="contact-menu">
                <div className="rainbow-wrap">
                  <div className="rainbow-border">
                    <span></span>
                    <span></span>
                  </div>
                  <div className="contact">
                    {didLoad === false && (
                      <p className="send-fail">Something went wrong!</p>
                    )}
                    {isLoading && <Spinner />}
                    <div
                      className={`contact-title${isLoading ? " loading" : ""}`}
                    >
                      Get in touch
                    </div>
                    <Form isLoading={isLoading} sendData={sendData} />
                  </div>
                </div>
              </div>
              {didLoad === null && !windowWidth && <Kraken show={state} />}
            </Fragment>
          )}
        </ContactModal>
      )}
    </Transition>
  );
};

export default ContactMenu;
