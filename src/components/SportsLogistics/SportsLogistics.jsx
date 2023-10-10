import { Link } from "react-router-dom";
import styles from "./SportsLogistics.module.css";

const DirectDivision = () => {
  return (
    <>
      <section
        className={`${styles.containerInfo} ${styles.section}`}
        id="directDivision"
      >
        <div className={styles.containerTexts}>
          <h2 className={`${styles.title} ${styles.left}`}>
            Logística Utilerías Deportivas
          </h2>
          <p className={styles.paragraph}>
            Alaz Logística es la solución integral para todas tus necesidades de
            transporte y gestión de utilerías deportivas. Ya sea que seas un
            equipo deportivo profesional, una academia deportiva o cualquier
            entidad relacionada con el mundo del deporte, nuestro servicio de
            logística está diseñado para brindarte una experiencia sin
            preocupaciones y eficiente en la gestión de tus productos
            deportivos.
            <br />
            {/* Sabemos lo importante que es para las directoras de ventas la cadena
            de distribución con respecto a los tiempos de entrega, a la atención
            cordial y personalizada y al cuidado de sus productos, para poder
            lograr sus objetivos personales.
            <br /> */}
            Es por esto que contamos con la estructura, los móviles y el
            personal capacitado para ser un socio estratégico para su empresa.
          </p>
          <Link to="https://whatsapp.com/" target="_blank" rel="noreferer">
            <button
              className={`${styles.cta} ${styles.ctaInfo} ${styles.ctaDivision}`}
            >
              Contacto
            </button>
          </Link>
        </div>
        <img
          src="/img/us/logistica.png"
          alt=""
          className={styles.imgDivision}
        />
      </section>
    </>
  );
};

export default DirectDivision;
