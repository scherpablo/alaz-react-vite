import styles from "./Services.module.css";

const Services = () => {
  return (
    <>
      <section className={styles.containerCards} id="services">
        <h2 className={`${styles.title} ${styles.serviceTitle}`}>Servicios</h2>
        <div className= {styles.cards}>
          <article className={styles.card}>
            <i className="fa-solid fa-comments fa-2xl"></i>
            <h3>Title Card 01</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia tempora magni quae. Veritatis id, quod quasi doloremque
              quia explicabo?
            </p>
            <a href="" className={`${styles.cta} ${styles.ctaCard}`}>
              Lear More
            </a>
          </article>
          <br />
          <article className={styles.card}>
            <i className="fa-solid fa-truck fa-2xl"></i>
            <h3>Title Card 02</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia tempora magni quae. Veritatis id, quod quasi doloremque
              quia explicabo?
            </p>
            <a href="" className={`${styles.cta} ${styles.ctaCard}`}>
              Lear More
            </a>
          </article>
          <br />
          <article className={styles.card}>
            <i className="fa-solid fa-truck fa-2xl"></i>
            <h3>Title Card 03</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia tempora magni quae. Veritatis id, quod quasi doloremque
              quia explicabo?
            </p>
            <a href="" className={`${styles.cta} ${styles.ctaCard}`}>
              Lear More
            </a>
          </article>
          <article className={styles.card}>
            <i className="fa-solid fa-comments fa-2xl"></i>
            <h3>Title Card 01</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia tempora magni quae. Veritatis id, quod quasi doloremque
              quia explicabo?
            </p>
            <a href="" className={`${styles.cta} ${styles.ctaCard}`}>
              Lear More
            </a>
          </article>
          <br />
          <article className={styles.card}>
            <i className="fa-solid fa-truck fa-2xl"></i>
            <h3>Title Card 02</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia tempora magni quae. Veritatis id, quod quasi doloremque
              quia explicabo?
            </p>
            <a href="" className={`${styles.cta} ${styles.ctaCard}`}>
              Lear More
            </a>
          </article>
          <br />
          <article className={styles.card}>
            <i className="fa-solid fa-truck fa-2xl"></i>
            <h3>Title Card 03</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              mollitia tempora magni quae. Veritatis id, quod quasi doloremque
              quia explicabo?
            </p>
            <a href="" className={`${styles.cta} ${styles.ctaCard}`}>
              Lear More
            </a>
          </article>
        </div>
      </section>
    </>
  );
};

export default Services;
