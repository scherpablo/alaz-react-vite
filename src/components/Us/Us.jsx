import { Link } from "react-router-dom"; 
import styles from "./Us.module.css";

const Us = () => {
  return (
    <>
      <section className={`${styles.containerInfo} ${styles.section}`} id="us">
        <div className={styles.containerTexts}>
          <h2 className={`${styles.title} ${styles.left}`}>La Empresa</h2>
          <p className={styles.paragraph}>
            ALAZ LOGISTICA es un equipo apasionado por la logística y la
            excelencia en el servicio. Nos encontramos en pleno crecimiento y
            con objetivos claros los cuales nos permiten mejorar día a día. 
            <br />
            En un mercado exigente y donde los tiempos de entrega son cada vez más
            reducidos, ofrecemos a nuestros clientes un servicio de logística
            integral. 
            <br />
            Para ello contamos con unidades acordes a cada necesidad,
            atención personalizada y la calidad y confianza que usted necesita
            para poder cumplir con sus objetivos logísticos.
          </p>
          <Link to="https://whatsapp.com/" target="_blank" rel="noreferer"><a className={`${styles.cta} ${styles.ctaInfo}`}>
            Contacto
          </a></Link>
        </div>
        <img src="/img/us/logistica.png" alt="" className={styles.imgInfo} />
      </section>
    </>
  );
};

export default Us;
