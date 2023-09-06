import { useForm, ValidationError } from "@formspree/react";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  validateName,
  validateEmail,
  validateMessage,
} from "../../helpers/validations";
import styles from "./Contact.module.css";

// const siteKey = import.meta.env.VITE_SITE_KEY;

const Contact = () => {
  const captcha = useRef(null);
  const [state, handleSubmit] = useForm("mzblgaly");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("Usuario Verificado");
      setCaptchaError("");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const nameValue = e.target.name.value;
    const emailValue = e.target.email.value;
    const messageValue = e.target.message.value;

    if (!validateName(nameValue)) {
      setNameError("ingrese un nombre entre 3 y 20 caracteres.");
      return;
    } else {
      setNameError("");
    }
    if (!validateEmail(emailValue)) {
      setEmailError("ingrese un correo electrónico válido.");
      return;
    } else {
      setEmailError("");
    }
    if (!validateMessage(messageValue)) {
      setMessageError("ingrese un mensaje entre 20 y 150 caracteres.");
      return;
    } else {
      setMessageError("");
    }
    const isCaptchaCompleted = !!captcha.current.getValue();
    if (!isCaptchaCompleted) {
      setCaptchaError("complete el captcha.");
      return;
    }
    const result = await handleSubmit(e);
    if (result && result.error) {
      // Manejar el error aquí si es necesario
    } else {
      setFormSubmitted(true);
    }
  };

  return (
    <>
      <div className={`${styles.containerForm} ${styles.section}`} id="contact">
        <h2 className={styles.contact}>Contactanos</h2>
        {formSubmitted ? (
          <p className={styles.successMessage}>
            Gracias por contactarnos. Te responderemos a la brevedad. ¡Muchas
            gracias!
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles.containerInputs}>
              <div className={styles.containerInputName}>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                {nameError && <p className={styles.errorName}>{nameError}</p>}
              </div>
              <input type="text" name="_gotcha" className={styles.gotcha} />
              <div className={styles.containerInputEmail}>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                {emailError && (
                  <p className={styles.errorEmail}>{emailError}</p>
                )}
              </div>
            </div>
            <textarea
              className={styles.input}
              name="message"
              id="message"
              placeholder="Mensaje"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            {messageError && (
              <p className={styles.errorMessage}>{messageError}</p>
            )}
            <input
              className={styles.input}
              type="submit"
              value="Enviar"
              disabled={state.submitting}
            />
            <div className={captcha}>
              <ReCAPTCHA
                // sitekey={siteKey}
                sitekey="6LeBCgAoAAAAAGazaOb1U5rL6OUAMXd6BMhENETV"
                onChange={onChange}
                ref={captcha}
                className={captcha}
              />
              {captchaError && <p className={styles.error}>{captchaError}</p>}
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Contact;
