import styles from "./DirectDivision.module.css";

const DirectDivision = () => {
  return (
    <>
      <section className={`${styles.containerInfo} ${styles.section}`} id="directDivision">
        {/* <img src="../public/img/us/logistica.png" alt="" className={styles.imgDivision} /> */}
        <img src="/img/us/logistica.png" alt="" className={styles.imgDivision} />
        <div className={styles.containerTexts}>
          <h2 className={`${styles.title} ${styles.left}`}>Division Directa</h2>
          <p className={styles.paragraph}>
            Contamos con más de 5 años de experiencia en el mercado de la venta
            directa, no solo en la parte logística sino en la atención al
            cliente, lo cual nos permite brindar un servicio específico para
            cubrir las necesidades de sus clientes. Sabemos lo importante que es
            para las directoras de ventas la cadena de distribución con respecto
            a los tiempos de entrega, a la atención cordial y personalizada y al
            cuidado de sus productos, para poder lograr sus objetivos
            personales. Es por esto que contamos con la estructura, los móviles
            y el personal capacitado para ser un socio estratégico para su
            empresa.
          </p>
          <a href="" className={`${styles.cta} ${styles.ctaInfo}`}>
            Learn More
          </a>
        </div>
      </section>
    </>
  );
};

export default DirectDivision;
