import styles from './Contact.module.css'
const Contact = () => {
  return (
    <>
      <div className={`${styles.containerForm} ${styles.section}`}  id="contact">
        <h2 className={styles.contact}>Contactanos</h2>
        <form action="" className={styles.form}>
          <input className={styles.input} type="text" name="" id="" placeholder="nombre" />
          <input className={styles.input} type="email" name="" id="" placeholder="email" />
          <textarea
            className={styles.input}
            name=""
            id=""
            // cols="30"
            // rows="10"
            placeholder="Mensaje"
          ></textarea>
          <a href="#home" className={styles.ctaHome}>
            Inicio
          </a>
          <input className={styles.input} type="submit" value="Enviar" />
        </form>
      </div>
    </>
  );
};

export default Contact;
