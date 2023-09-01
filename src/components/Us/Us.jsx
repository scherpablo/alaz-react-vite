import styles from "./Us.module.css";

const Us = () => {
  return (
    <>
      <section className={`${styles.containerInfo} ${styles.section}`} id="us">
        <div className={styles.containerTexts}>
          <h2 className={`${styles.title} ${styles.left}`}>Nosotros</h2>
          <p className={styles.paragraph}>
            Somos una joven empresa argentina en pleno crecimiento y con
            objetivos claros los cuales nos permiten mejorar día a día En un
            mercado exigente y donde los tiempos de entrega son cada vez más
            reducidos, ofrecemos a nuestros clientes un servicio de logística
            integral. Para ello contamos con unidades acordes a cada necesidad,
            atención personalizada y la calidad y confianza que Ud. necesita
            para poder cumplir con sus objetivos logísticos.
          </p>
          <a href="" className={`${styles.cta} ${styles.ctaInfo}`}>
            Learn More
          </a>
        </div>
        <img src="../public/img/us/logistica.png" alt="" className={styles.imgInfo}/>
      </section>
    </>
  );
};

export default Us;
